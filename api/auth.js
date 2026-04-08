// api/auth.js
const https = require('https');

function readBody(req) {
    return new Promise((resolve, reject) => {
          const chunks = [];
          req.on('data', c => chunks.push(c));
          req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
          req.on('error', reject);
    });
}

function supabaseRequest(path, method, body, key) {
    return new Promise((resolve, reject) => {
          const url = process.env.SUPABASE_URL;
          const hostname = url.replace('https://', '').replace('http://', '');
          const bodyStr = body ? JSON.stringify(body) : '';
          const options = {
                  hostname, path, method,
                  headers: {
                            'Content-Type': 'application/json',
                            'apikey': key,
                            'Authorization': `Bearer ${key}`,
                            ...(bodyStr ? { 'Content-Length': Buffer.byteLength(bodyStr) } : {})
                  }
          };
          const req = https.request(options, res => {
                  let data = '';
                  res.on('data', c => data += c);
                  res.on('end', () => {
                            try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
                            catch (e) { resolve({ status: res.statusCode, body: data }); }
                  });
          });
          req.on('error', reject);
          if (bodyStr) req.write(bodyStr);
          req.end();
    });
}

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.status(204).end();

    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
    if (!SUPABASE_KEY) return res.status(500).json({ error: 'SUPABASE_SERVICE_KEY not configured' });

    const url = new URL(req.url, `https://${req.headers.host}`);
    const action = url.searchParams.get('action');

    try {
          const rawBody = req.method === 'POST' ? await readBody(req) : '{}';
          const body = rawBody ? JSON.parse(rawBody) : {};

      if (action === 'signup') {
              const { email, password, name, agency } = body;
              if (!email || !password || !name) return res.status(400).json({ error: 'Email, password and name required' });
              const r = await supabaseRequest('/auth/v1/signup', 'POST', { email, password }, SUPABASE_KEY);
              if (r.status !== 200 || r.body.error) return res.status(400).json({ error: r.body.error?.message || r.body.error || 'Signup failed' });
              const userId = r.body.user?.id;
              if (userId) {
                        await supabaseRequest('/rest/v1/agents', 'POST', {
                                    id: userId, email, name, agency: agency || '', plan: 'trial', reports_used: 0, created_at: new Date().toISOString()
                        }, SUPABASE_KEY);
              }
              return res.status(200).json({ token: r.body.access_token, user: { id: userId, email, name, agency, plan: 'trial' } });
      }

      if (action === 'login') {
              const { email, password } = body;
              const r = await supabaseRequest('/auth/v1/token?grant_type=password', 'POST', { email, password }, SUPABASE_KEY);
              if (r.status !== 200 || r.body.error) return res.status(400).json({ error: r.body.error_description || r.body.error || 'Login failed' });
              const userId = r.body.user?.id;
              const profile = await supabaseRequest(`/rest/v1/agents?id=eq.${userId}&select=*`, 'GET', null, SUPABASE_KEY);
              const agent = Array.isArray(profile.body) ? profile.body[0] : null;
              return res.status(200).json({ token: r.body.access_token, user: { id: userId, email: r.body
