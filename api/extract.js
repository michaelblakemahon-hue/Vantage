// api/extract.js
const https = require('https');

function callAnthropic(body, apiKey) {
    return new Promise((resolve, reject) => {
          const bodyStr = JSON.stringify(body);
          const options = {
                  hostname: 'api.anthropic.com',
                  path: '/v1/messages',
                  method: 'POST',
                  headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': Buffer.byteLength(bodyStr),
                            'x-api-key': apiKey,
                            'anthropic-version': '2023-06-01',
                  },
          };
          const req = https.request(options, (res) => {
                  let data = '';
                  res.on('data', (chunk) => { data += chunk; });
                  res.on('end', () => resolve({ status: res.statusCode, body: data }));
          });
          req.on('error', reject);
          req.write(bodyStr);
          req.end();
    });
}

function readBody(req) {
    return new Promise((resolve, reject) => {
          const chunks = [];
          req.on('data', (c) => chunks.push(c));
          req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
          req.on('error', reject);
    });
}

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') { return res.status(204).end(); }
    if (req.method !== 'POST') {
          return res.status(405).json({ error: { message: 'Method not allowed' } });
    }
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
          return res.status(500).json({ error: { message: 'ANTHROPIC_API_KEY not set' } });
    }
    try {
          const raw = await readBody(req);
          const body = JSON.parse(raw);
          const result = await callAnthropic(body, apiKey);
          res.setHeader('Content-Type', 'application/json');
          res.status(result.status).send(result.body);
    } catch (err) {
          console.error('Extract error:', err.message);
          res.status(500).json({ error: { message: err.message } });
    }
};
