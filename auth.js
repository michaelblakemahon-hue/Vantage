<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Vantage — Agent Intelligence Platform</title>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=Instrument+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
<style>
/* ═══════════════════════════════════════════════════════
   VANTAGE — Refined Luxury · Chubb-inspired
   
   Direction: White-glove financial institution
   Ground:    #FAFAF8 warm white, not pure white
   Type:      Cormorant Garamond display + Instrument Sans body
   Structure: Ruled lines, no rounded corners on structural elements
   Accent:    Single deep navy #0A1628 — used sparingly
   Motion:    Subtle, purposeful — nothing decorative
═══════════════════════════════════════════════════════ */

:root {
  /* Grounds */
  --white:    #FAFAF8;
  --white2:   #F4F3EF;
  --white3:   #EDECEA;
  --black:    #0A0A08;
  --ink:      #0A1628;
  --ink2:     #2C3240;
  --ink3:     #5A6070;
  --ink4:     #8A8F98;
  --rule:     rgba(10,22,40,.1);
  --rule2:    rgba(10,22,40,.05);
  /* Accent */
  --navy:     #0A1628;
  --navy2:    #112040;
  --accent:   #1B3A6B;
  /* Type */
  --display:  'Cormorant Garamond', 'EB Garamond', Georgia, serif;
  --body:     'Instrument Sans', 'Source Serif 4', system-ui, sans-serif;
  --mono:     'JetBrains Mono', monospace;
  /* No border-radius on structural elements */
  --r: 0px;
  --r2: 2px;
  --r3: 3px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; }
body {
  font-family: var(--body);
  background: var(--white);
  color: var(--ink);
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex; flex-direction: column;
}
a { text-decoration: none; color: inherit; }

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* PAGES */
.page { display: none; flex: 1; flex-direction: column; overflow: hidden; }
.page.active { display: flex; }
#page-landing { overflow-y: auto; }

/* ── BUTTONS ────────────────────────────────── */
.btn {
  padding: 10px 24px;
  font-size: 13px; font-weight: 500;
  font-family: var(--body);
  border-radius: 0;
  cursor: pointer;
  transition: all .18s;
  line-height: 1;
  border: 1px solid transparent;
  display: inline-flex; align-items: center; gap: 6px;
  letter-spacing: .02em;
  text-transform: uppercase;
}
.btn-ink {
  background: var(--ink); color: var(--white);
  border-color: var(--ink);
}
.btn-ink:hover { background: var(--accent); border-color: var(--accent); }
.btn-outline {
  background: transparent; color: var(--ink);
  border-color: var(--ink);
}
.btn-outline:hover { background: var(--ink); color: var(--white); }
.btn-ghost {
  background: transparent; border-color: var(--rule);
  color: var(--ink3);
}
.btn-ghost:hover { border-color: var(--ink); color: var(--ink); }
.btn-white {
  background: var(--white); color: var(--ink);
  border-color: var(--white);
}
.btn-sm { padding: 7px 16px; font-size: 11px; }
.btn-lg { padding: 14px 32px; font-size: 13px; letter-spacing: .04em; }
.btn-danger { background: transparent; border-color: rgba(180,30,30,.3); color: #b41e1e; }
.btn-danger:hover { background: rgba(180,30,30,.05); }

/* ── FORMS ──────────────────────────────────── */
.field { margin-bottom: 1.1rem; }
.field label {
  display: block; font-size: 10px; font-weight: 500;
  color: var(--ink3); margin-bottom: 6px;
  letter-spacing: .1em; text-transform: uppercase;
  font-family: var(--mono);
}
.field input, .field select, .field textarea {
  width: 100%; padding: 10px 12px;
  border: 1px solid var(--rule);
  border-radius: 0;
  font-size: 14px; color: var(--ink);
  background: var(--white);
  outline: none; transition: border-color .15s;
  font-family: var(--body);
}
.field input:focus, .field select:focus, .field textarea:focus {
  border-color: var(--ink);
}
.field input::placeholder { color: var(--ink4); }
.field textarea { min-height: 70px; resize: vertical; }

/* ── ALERTS ─────────────────────────────────── */
.alert { padding: .75rem 1rem; font-size: 13px; margin-bottom: 1rem; border-left: 3px solid; }
.alert-error  { background: #fef8f8; border-color: #c84040; color: #8b1c1c; }
.alert-success { background: #f6faf6; border-color: #2d7a2d; color: #1a4d1a; }

/* ════════════════════════════════════════════
   LANDING — NAV
════════════════════════════════════════════ */
.l-nav {
  position: sticky; top: 0; z-index: 100;
  height: 64px;
  display: flex; align-items: center;
  padding: 0 3rem;
  background: var(--ink);
  border-bottom: 2px solid var(--ink);
  transition: all .3s;
}
.l-logo {
  font-family: var(--display);
  font-size: 24px; font-weight: 700;
  color: var(--white); letter-spacing: -.01em;
  font-style: normal;
  display: flex; align-items: baseline; gap: 0;
}
.l-logo-v {
  font-size: 30px; font-weight: 900;
  color: var(--white); letter-spacing: -.02em;
  line-height: 1;
  font-style: italic;
}
.l-logo-rest {
  font-size: 22px; font-weight: 400;
  letter-spacing: .05em;
  color: rgba(250,250,248,.7);
  text-transform: uppercase;
}
.l-nav-links { display: flex; gap: 2rem; margin-left: 3rem; }
.l-nav-a {
  font-size: 11px; font-weight: 400;
  color: rgba(250,250,248,.5); letter-spacing: .08em;
  text-transform: uppercase;
  transition: color .14s;
}
.l-nav-a:hover { color: rgba(250,250,248,.9); }
.l-nav-right { margin-left: auto; display: flex; gap: 10px; align-items: center; }

/* ════════════════════════════════════════════
   HERO — Full-width editorial
════════════════════════════════════════════ */
.l-hero {
  border-bottom: 1px solid var(--rule);
  position: relative;
}
.l-hero-grid {
  max-width: 1320px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 60px);
}
/* Left: text */
.l-hero-left {
  padding: 7rem 5rem 7rem 3rem;
  display: flex; flex-direction: column; justify-content: center;
  border-right: 1px solid var(--rule);
  animation: fade-up .7s ease both;
}
.l-hero-kicker {
  font-family: var(--mono);
  font-size: 10px; font-weight: 500;
  color: var(--ink3); letter-spacing: .18em;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  display: flex; align-items: center; gap: 12px;
}
.l-hero-kicker::before {
  content: ''; width: 32px; height: 1px;
  background: var(--ink3);
}
.l-h1 {
  font-family: var(--display);
  font-size: clamp(3.5rem, 6vw, 6rem);
  font-weight: 500; line-height: .95;
  letter-spacing: -.02em;
  color: var(--ink);
  margin-bottom: 2rem;
}
.l-h1 em { font-style: italic; }
.l-hero-rule { width: 48px; height: 1px; background: var(--ink); margin-bottom: 2rem; }
.l-sub {
  font-size: 16px; color: var(--ink3);
  line-height: 1.75; max-width: 420px;
  margin-bottom: 3rem; font-weight: 300;
  font-family: var(--body);
}
.l-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 4rem; }
.l-hero-stats {
  display: flex; gap: 0;
  border-top: 1px solid var(--rule);
  padding-top: 2.5rem;
}
.l-hstat {
  padding-right: 2.5rem; margin-right: 2.5rem;
  border-right: 1px solid var(--rule);
}
.l-hstat:last-child { border-right: none; }
.l-hstat-n {
  font-family: var(--display);
  font-size: 2rem; font-weight: 500;
  color: var(--ink); letter-spacing: -.02em;
  line-height: 1;
}
.l-hstat-l {
  font-family: var(--mono);
  font-size: 10px; color: var(--ink4);
  text-transform: uppercase; letter-spacing: .1em;
  margin-top: 5px;
}

/* Right: dashboard preview */
.l-hero-right {
  background: var(--white2);
  display: flex; align-items: center; justify-content: center;
  padding: 3rem 2.5rem;
  animation: fade-up .7s .15s ease both;
}
.l-preview {
  width: 100%; max-width: 500px;
  background: var(--white);
  border: 1px solid var(--rule);
  box-shadow: 0 2px 8px rgba(10,22,40,.04), 0 16px 48px rgba(10,22,40,.08), 0 40px 80px rgba(10,22,40,.05);
}
.l-preview-header {
  border-bottom: 1px solid var(--rule);
  padding: .875rem 1.25rem;
  display: flex; align-items: center; justify-content: space-between;
  background: var(--ink);
}
.l-preview-brand { font-family: var(--display); font-size: 14px; font-weight: 600; color: var(--white); }
.l-preview-date { font-family: var(--mono); font-size: 10px; color: rgba(250,250,248,.4); }
.l-preview-body { padding: 1.5rem; }
.l-preview-label {
  font-family: var(--mono); font-size: 9px;
  text-transform: uppercase; letter-spacing: .14em;
  color: var(--ink4); margin-bottom: 1rem;
}
/* KPI strip */
.lpkpis { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--rule2); border: 1px solid var(--rule2); margin-bottom: 1rem; }
.lpkpi { background: var(--white); padding: .75rem .875rem; }
.lpkpi-v { font-family: var(--mono); font-size: 15px; font-weight: 500; color: var(--ink); letter-spacing: -.02em; }
.lpkpi-v.warn { color: #92400e; }
.lpkpi-l { font-family: var(--mono); font-size: 8px; color: var(--ink4); text-transform: uppercase; letter-spacing: .07em; margin-top: 3px; }
/* Policy rows */
.lppols { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--rule2); border: 1px solid var(--rule2); margin-bottom: 1rem; }
.lppol { background: var(--white2); padding: .65rem .875rem; border-left: 2px solid var(--ink); }
.lppol:nth-child(2) { border-color: #92400e; }
.lppol:nth-child(3) { border-color: #2d7a2d; }
.lppol-n { font-size: 10px; font-weight: 500; color: var(--ink); margin-bottom: 4px; }
.lppol-s { font-family: var(--mono); font-size: 9px; color: var(--ink4); }
/* Bar chart */
.lpbars { display: flex; align-items: flex-end; gap: 3px; height: 52px; }
.lpbar { flex: 1; background: var(--ink); opacity: .15; border-radius: 0; }
.lpbar.hi { opacity: .7; }
.lp-footer { border-top: 1px solid var(--rule); padding: .6rem 1.25rem; display: flex; align-items: center; justify-content: space-between; background: var(--white2); }
.lpf-brand { font-family: var(--display); font-size: 12px; font-weight: 600; color: var(--ink2); }
.lpf-meta { font-family: var(--mono); font-size: 9px; color: var(--ink4); }

/* ════════════════════════════════════════════
   TICKER / STRIP
════════════════════════════════════════════ */
.l-ticker {
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  height: 44px;
  overflow: hidden;
  background: var(--ink);
  display: flex; align-items: center;
}
.l-ticker-track { display: flex; width: max-content; align-items: center; height: 100%; animation: marquee 40s linear infinite; }
.l-ticker-item { display: flex; align-items: center; gap: 14px; padding: 0 2.75rem; border-right: 1px solid rgba(250,250,248,.08); height: 100%; white-space: nowrap; }
.l-ticker-n { font-family: var(--mono); font-size: 13px; font-weight: 500; color: var(--white); letter-spacing: .02em; line-height: 1; }
.l-ticker-sep { color: rgba(250,250,248,.2); font-size: 8px; line-height: 1; }
.l-ticker-l { font-family: var(--mono); font-size: 10px; color: rgba(250,250,248,.38); text-transform: uppercase; letter-spacing: .12em; line-height: 1; }

/* ════════════════════════════════════════════
   FEATURES
════════════════════════════════════════════ */
.l-features { max-width: 1320px; margin: 0 auto; padding: 7rem 3rem; }
.l-section-top {
  display: flex; align-items: flex-end; justify-content: space-between;
  padding-bottom: 3rem; border-bottom: 1px solid var(--rule);
  margin-bottom: 0;
}
.l-section-kicker {
  font-family: var(--mono); font-size: 10px;
  color: var(--ink3); text-transform: uppercase;
  letter-spacing: .18em; margin-bottom: 1.5rem;
}
.l-h2 {
  font-family: var(--display);
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 500; color: var(--ink);
  line-height: 1.05; letter-spacing: -.02em;
}
.l-h2 em { font-style: italic; }
.l-feat-grid {
  display: grid; grid-template-columns: repeat(4,1fr);
  border-left: 1px solid var(--rule);
}
.l-feat {
  padding: 3rem 2rem 2.5rem;
  border-right: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
  transition: background .2s;
}
.l-feat:hover { background: var(--white2); }
.l-feat-num {
  font-family: var(--mono); font-size: 10px;
  color: var(--ink4); letter-spacing: .12em;
  margin-bottom: 2.5rem;
}
.l-feat-title {
  font-family: var(--display);
  font-size: 1.3rem; font-weight: 500;
  color: var(--ink); line-height: 1.2;
  letter-spacing: -.01em; margin-bottom: 1rem;
}
.l-feat-desc { font-size: 13px; color: var(--ink3); line-height: 1.75; font-weight: 300; }

/* ════════════════════════════════════════════
   QUOTE / TESTIMONIAL BAND
════════════════════════════════════════════ */
.l-quote-band {
  background: var(--ink);
  padding: 6rem 3rem;
  text-align: center;
}
.l-quote-inner { max-width: 740px; margin: 0 auto; }
.l-quote-mark { font-family: var(--display); font-size: 80px; color: rgba(250,250,248,.12); line-height: .6; margin-bottom: 1.5rem; }
.l-quote-text {
  font-family: var(--display); font-style: italic;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 400; color: var(--white);
  line-height: 1.5; letter-spacing: -.01em;
  margin-bottom: 2rem;
}
.l-quote-attr { font-family: var(--mono); font-size: 11px; color: rgba(250,250,248,.4); text-transform: uppercase; letter-spacing: .14em; }

/* ════════════════════════════════════════════
   PRICING
════════════════════════════════════════════ */
.l-pricing { border-top: 1px solid var(--rule); }
.l-pricing-inner { max-width: 1320px; margin: 0 auto; padding: 7rem 3rem; }
.l-pricing-head {
  display: flex; align-items: flex-end; justify-content: space-between;
  padding-bottom: 3rem; border-bottom: 1px solid var(--rule);
  margin-bottom: 0;
}
.l-plans {
  display: grid; grid-template-columns: repeat(3,1fr);
  border-left: 1px solid var(--rule);
}
.l-plan {
  padding: 3rem 2.5rem;
  border-right: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.l-plan.featured { background: var(--ink); }
.l-plan-tier {
  font-family: var(--mono); font-size: 10px;
  text-transform: uppercase; letter-spacing: .14em;
  color: var(--ink4); margin-bottom: 1.5rem;
}
.l-plan.featured .l-plan-tier { color: rgba(250,250,248,.4); }
.l-plan-price {
  font-family: var(--display); font-size: 3rem;
  font-weight: 500; color: var(--ink);
  letter-spacing: -.03em; line-height: 1;
  margin-bottom: .3rem;
}
.l-plan.featured .l-plan-price { color: var(--white); }
.l-plan-period { font-size: 12px; color: var(--ink3); margin-bottom: 2.5rem; }
.l-plan.featured .l-plan-period { color: rgba(250,250,248,.4); }
.l-plan-divider { height: 1px; background: var(--rule); margin-bottom: 2rem; }
.l-plan.featured .l-plan-divider { background: rgba(250,250,248,.1); }
.l-plan-item {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 13px; color: var(--ink2); margin-bottom: .75rem;
  font-weight: 300;
}
.l-plan.featured .l-plan-item { color: rgba(250,250,248,.7); }
.l-plan-dash { color: var(--ink4); font-family: var(--mono); flex-shrink: 0; font-size: 11px; margin-top: 1px; }
.l-plan.featured .l-plan-dash { color: rgba(250,250,248,.35); }
.l-plan-btn {
  width: 100%; margin-top: 2.5rem; padding: 12px;
  font-size: 12px; font-weight: 500;
  letter-spacing: .06em; text-transform: uppercase;
  cursor: pointer; font-family: var(--body);
  border-radius: 0; transition: all .18s; border: 1px solid;
}

/* ════════════════════════════════════════════
   CTA BOTTOM
════════════════════════════════════════════ */
.l-cta {
  border-top: 1px solid var(--rule);
  max-width: 1320px; margin: 0 auto;
  padding: 7rem 3rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
}
.l-cta-h2 {
  font-family: var(--display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 500; color: var(--ink);
  line-height: 1.05; letter-spacing: -.02em; margin-bottom: 1.25rem;
}
.l-cta-h2 em { font-style: italic; }
.l-cta-p { font-size: 15px; color: var(--ink3); line-height: 1.75; font-weight: 300; }
.l-cta-right {
  border: 1px solid var(--rule);
  padding: 2.5rem;
}
.l-cta-form-h { font-family: var(--display); font-size: 1.4rem; font-weight: 500; color: var(--ink); letter-spacing: -.01em; margin-bottom: .4rem; }
.l-cta-form-sub { font-size: 13px; color: var(--ink3); margin-bottom: 2rem; font-weight: 300; }

/* ════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════ */
.l-footer {
  border-top: 1px solid var(--rule);
  padding: 2rem 3rem;
  display: flex; align-items: center; justify-content: space-between;
  background: var(--white);
}
.l-footer-logo { font-family: var(--display); font-size: 16px; font-weight: 600; color: var(--ink); }
.l-footer-links { display: flex; gap: 2rem; }
.l-footer-link { font-family: var(--mono); font-size: 10px; color: var(--ink4); text-transform: uppercase; letter-spacing: .1em; transition: color .14s; }
.l-footer-link:hover { color: var(--ink); }
.l-footer-copy { font-family: var(--mono); font-size: 10px; color: var(--ink4); }

/* ════════════════════════════════════════════
   AUTH
════════════════════════════════════════════ */
.auth-wrap { display: grid; grid-template-columns: 1fr 1fr; height: 100%; }
.auth-left {
  background: var(--ink); padding: 3.5rem;
  display: flex; flex-direction: column;
  position: relative; overflow: hidden;
}
.auth-left::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--rule2) 1px, transparent 1px),
    linear-gradient(90deg, var(--rule2) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: .3; pointer-events: none;
}
.auth-brand { font-family: var(--display); font-size: 20px; font-weight: 600; color: var(--white); letter-spacing: .01em; margin-bottom: 3rem; position: relative; }
.auth-left-content { position: relative; flex: 1; display: flex; flex-direction: column; justify-content: center; }
.auth-h { font-family: var(--display); font-size: 2.6rem; font-weight: 500; color: var(--white); line-height: 1.05; letter-spacing: -.02em; margin-bottom: 1rem; }
.auth-h em { font-style: italic; }
.auth-p { font-size: 14px; color: rgba(250,250,248,.45); line-height: 1.8; font-weight: 300; max-width: 280px; margin-bottom: 3rem; }
.auth-pills { display: flex; flex-direction: column; gap: 1px; background: rgba(250,250,248,.07); border: 1px solid rgba(250,250,248,.07); }
.auth-pill { display: flex; align-items: center; gap: 1.5rem; padding: .875rem 1rem; border-bottom: 1px solid rgba(250,250,248,.06); }
.auth-pill:last-child { border-bottom: none; }
.auth-pill-n { font-family: var(--display); font-size: 1.6rem; font-weight: 500; color: var(--white); min-width: 52px; letter-spacing: -.02em; }
.auth-pill-l { font-size: 12px; color: rgba(250,250,248,.45); font-weight: 300; }
.auth-right { background: var(--white); display: flex; align-items: center; justify-content: center; padding: 3rem; overflow-y: auto; }
.auth-form { width: 100%; max-width: 360px; }
.auth-form-title { font-family: var(--display); font-size: 2rem; font-weight: 500; color: var(--ink); letter-spacing: -.02em; margin-bottom: .4rem; }
.auth-form-sub { font-size: 13px; color: var(--ink3); font-weight: 300; margin-bottom: 2rem; line-height: 1.6; }
.auth-switch { font-size: 13px; color: var(--ink3); margin-top: 1.25rem; text-align: center; }
.auth-switch a { color: var(--ink); font-weight: 500; cursor: pointer; text-decoration: underline; }

/* ════════════════════════════════════════════
   APP SHELL — Keep dark, tighten it up
════════════════════════════════════════════ */
.app-hdr {
  height: 52px; flex-shrink: 0;
  background: #0E1420;
  border-bottom: 1px solid rgba(255,255,255,.07);
  display: flex; align-items: center; padding: 0 1.5rem; gap: .75rem;
}
.app-logo { font-family: var(--display); font-size: 17px; font-weight: 600; color: #FAFAF8; letter-spacing: .01em; }
.app-sep { color: rgba(255,255,255,.15); font-size: 18px; }
.app-bc { font-family: var(--mono); font-size: 11px; color: rgba(255,255,255,.38); }
.app-bc strong { color: rgba(255,255,255,.7); }
.app-hdr-right { margin-left: auto; display: flex; gap: 8px; align-items: center; }
.agent-pill { display: flex; align-items: center; gap: 7px; padding: 4px 12px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.08); border-radius: 0; font-size: 12px; color: rgba(255,255,255,.6); }
.agent-av { width: 22px; height: 22px; background: rgba(255,255,255,.15); display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 600; color: #FAFAF8; font-family: var(--mono); }
.app-body { flex: 1; display: flex; overflow: hidden; }
.app-sidebar {
  width: 210px; flex-shrink: 0;
  background: #0B1119;
  border-right: 1px solid rgba(255,255,255,.06);
  padding: 1.5rem .875rem; overflow-y: auto; display: flex; flex-direction: column;
}
.sb-lbl {
  font-family: var(--mono); font-size: 9px; font-weight: 500;
  text-transform: uppercase; letter-spacing: .16em;
  color: rgba(255,255,255,.2); padding: 0 .5rem; margin-bottom: .5rem;
}
.sb-lbl + .sb-lbl, .sb-item + .sb-lbl { margin-top: 1.75rem; }
.sb-item {
  display: flex; align-items: center; gap: 8px;
  padding: 7px 10px; border-radius: 0;
  font-size: 12px; font-weight: 400;
  color: rgba(255,255,255,.4); cursor: pointer;
  transition: all .12s; border: 1px solid transparent;
  letter-spacing: .01em;
}
.sb-item:hover { background: rgba(255,255,255,.04); color: rgba(255,255,255,.8); }
.sb-item.active { background: rgba(255,255,255,.06); border-left: 2px solid rgba(255,255,255,.5); color: rgba(255,255,255,.9); font-weight: 500; }
.sb-dot { width: 4px; height: 4px; background: currentColor; opacity: .4; flex-shrink: 0; }
.sb-item.active .sb-dot { opacity: 1; }
.sb-spacer { flex: 1; }
.app-main { flex: 1; overflow-y: auto; background: #10151E; padding: 2rem 2.5rem; position: relative; }

/* VIEWS */
.view { display: none; }
.view.active { display: block; }

/* Dashboard */
.dash-h1 { font-family: var(--display); font-size: 1.75rem; font-weight: 500; color: #FAFAF8; letter-spacing: -.02em; }
.dash-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.06); margin: 1.5rem 0; }
.dash-stat { background: #141B26; padding: 1.25rem 1.25rem; }
.ds-lbl { font-family: var(--mono); font-size: 9px; text-transform: uppercase; letter-spacing: .12em; color: rgba(255,255,255,.3); margin-bottom: 8px; }
.ds-val { font-family: var(--display); font-size: 2rem; font-weight: 500; color: #FAFAF8; letter-spacing: -.03em; }
.ds-sub { font-size: 11px; color: rgba(255,255,255,.25); margin-top: 4px; }
.clients-bar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
.clients-bar-title { font-size: 12px; font-weight: 500; color: rgba(255,255,255,.5); font-family: var(--mono); text-transform: uppercase; letter-spacing: .08em; }
.search-input { padding: 7px 12px; border: 1px solid rgba(255,255,255,.1); border-radius: 0; font-size: 13px; color: #FAFAF8; background: rgba(255,255,255,.05); outline: none; width: 220px; transition: border-color .14s; font-family: var(--body); }
.search-input:focus { border-color: rgba(255,255,255,.3); }
.search-input::placeholder { color: rgba(255,255,255,.2); }
.clients-tbl { background: #141B26; border: 1px solid rgba(255,255,255,.07); }
.ct-head { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr 88px; padding: .5rem 1.25rem; border-bottom: 1px solid rgba(255,255,255,.07); background: rgba(255,255,255,.03); }
.ct-hc { font-family: var(--mono); font-size: 8px; font-weight: 500; text-transform: uppercase; letter-spacing: .12em; color: rgba(255,255,255,.25); }
.ct-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr 88px; padding: .9rem 1.25rem; border-bottom: 1px solid rgba(255,255,255,.04); align-items: center; cursor: pointer; transition: background .12s; }
.ct-row:last-child { border-bottom: none; }
.ct-row:hover { background: rgba(255,255,255,.03); }
.ct-name { font-size: 13px; font-weight: 400; color: rgba(255,255,255,.85); }
.ct-sub { font-size: 11px; color: rgba(255,255,255,.3); }
.ct-cell { font-family: var(--mono); font-size: 11px; color: rgba(255,255,255,.45); }
.ct-badge { display: inline-block; padding: 2px 8px; border-radius: 0; font-family: var(--mono); font-size: 9px; font-weight: 500; border: 1px solid; }
.ct-badge.good { background: rgba(45,122,45,.12); color: #5aba5a; border-color: rgba(45,122,45,.2); }
.ct-badge.warn { background: rgba(180,110,10,.12); color: #d4921e; border-color: rgba(180,110,10,.2); }
.ct-badge.bad  { background: rgba(180,40,40,.12); color: #e06060; border-color: rgba(180,40,40,.2); }
.ct-badge.none { background: rgba(255,255,255,.04); color: rgba(255,255,255,.3); border-color: rgba(255,255,255,.08); }
.ct-empty { padding: 3.5rem; text-align: center; color: rgba(255,255,255,.25); font-size: 13px; }
.ct-empty-ico { font-size: 28px; margin-bottom: .875rem; opacity: .3; }

/* Client view */
.cv-back { font-family: var(--mono); font-size: 11px; color: rgba(255,255,255,.35); cursor: pointer; margin-bottom: 1rem; display: inline-flex; align-items: center; gap: 5px; transition: color .12s; }
.cv-back:hover { color: rgba(255,255,255,.7); }
.cv-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1.5rem; gap: 1rem; }
.cv-h1 { font-family: var(--display); font-size: 1.6rem; font-weight: 500; color: #FAFAF8; letter-spacing: -.02em; }
.cv-meta { font-family: var(--mono); font-size: 11px; color: rgba(255,255,255,.3); margin-top: 4px; }
.cv-layout { display: grid; grid-template-columns: 1fr 280px; gap: 1.25rem; }
.cv-reports { background: #141B26; border: 1px solid rgba(255,255,255,.07); }
.cv-reports-head { padding: .875rem 1.25rem; border-bottom: 1px solid rgba(255,255,255,.07); display: flex; align-items: center; justify-content: space-between; }
.cv-reports-title { font-family: var(--mono); font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: .12em; color: rgba(255,255,255,.35); }
.cv-empty { padding: 2.5rem; text-align: center; color: rgba(255,255,255,.25); font-size: 13px; }
.cr-row { padding: .9rem 1.25rem; border-bottom: 1px solid rgba(255,255,255,.04); cursor: pointer; transition: background .12s; display: flex; align-items: center; justify-content: space-between; }
.cr-row:last-child { border-bottom: none; }
.cr-row:hover { background: rgba(255,255,255,.03); }
.cr-row-name { font-size: 13px; font-weight: 400; color: rgba(255,255,255,.8); }
.cr-row-date { font-family: var(--mono); font-size: 10px; color: rgba(255,255,255,.28); margin-top: 2px; }
.cv-info { background: #141B26; border: 1px solid rgba(255,255,255,.07); padding: 1.25rem; }
.cvi-title { font-family: var(--mono); font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: .12em; color: rgba(255,255,255,.25); margin-bottom: 1rem; }
.cvi-row { display: flex; justify-content: space-between; margin-bottom: .65rem; font-size: 12px; }
.cvi-lbl { color: rgba(255,255,255,.3); }
.cvi-val { font-weight: 400; color: rgba(255,255,255,.65); text-align: right; max-width: 160px; word-break: break-word; }

/* Upload / Loading / Report */
.full-bleed { position: absolute; inset: 0; display: none; overflow: hidden; }
.full-bleed.active { display: flex; }
.upload-left {
  width: 320px; flex-shrink: 0;
  background: #0B1119;
  border-right: 1px solid rgba(255,255,255,.06);
  padding: 3rem; display: flex; flex-direction: column;
  position: relative; overflow: hidden;
}
.upload-left::before {
  content: ''; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask: radial-gradient(ellipse 100% 100% at 0% 0%, black 20%, transparent 70%);
  pointer-events: none;
}
.ul-inner { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; }
.ul-logo { font-family: var(--display); font-size: 18px; font-weight: 600; color: #FAFAF8; letter-spacing: .01em; margin-bottom: 3rem; }
.ul-label { font-family: var(--mono); font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: .14em; color: rgba(255,255,255,.3); margin-bottom: 1rem; }
.ul-h { font-family: var(--display); font-size: 1.9rem; font-weight: 500; color: #FAFAF8; line-height: 1.05; letter-spacing: -.02em; margin-bottom: 1rem; }
.ul-h em { font-style: italic; }
.ul-p { font-size: 13px; color: rgba(255,255,255,.35); line-height: 1.8; font-weight: 300; flex: 1; }
.ul-pills { display: flex; flex-direction: column; gap: 1px; background: rgba(255,255,255,.06); }
.ul-pill { display: flex; align-items: center; gap: 1.25rem; padding: .75rem 1rem; background: #0B1119; }
.ul-pill-n { font-family: var(--display); font-size: 1.5rem; font-weight: 500; color: #FAFAF8; letter-spacing: -.02em; min-width: 48px; }
.ul-pill-l { font-size: 12px; color: rgba(255,255,255,.35); font-weight: 300; }
.upload-right { flex: 1; background: var(--white); display: flex; align-items: center; justify-content: center; padding: 2.5rem; overflow-y: auto; }
.upload-form { width: 100%; max-width: 420px; }
.uf-back { font-family: var(--mono); font-size: 11px; color: var(--ink4); cursor: pointer; margin-bottom: 1.5rem; display: inline-flex; align-items: center; gap: 5px; transition: color .12s; }
.uf-back:hover { color: var(--ink); }
.uf-title { font-family: var(--display); font-size: 1.6rem; font-weight: 500; color: var(--ink); letter-spacing: -.02em; margin-bottom: .4rem; }
.uf-sub { font-size: 13px; color: var(--ink3); font-weight: 300; margin-bottom: 2rem; line-height: 1.6; }
.drop-zone {
  border: 1px solid var(--rule); padding: 3rem 2rem;
  background: var(--white2); cursor: pointer; transition: all .2s;
  text-align: center; margin-bottom: 1.5rem;
}
.drop-zone:hover, .drop-zone.drag { border-color: var(--ink); background: var(--white3); }
.drop-zone input { display: none; }
.drop-ico { font-size: 24px; margin-bottom: .875rem; opacity: .3; }
.drop-t { font-family: var(--display); font-size: 1.2rem; font-weight: 500; color: var(--ink); letter-spacing: -.01em; margin-bottom: 4px; }
.drop-s { font-family: var(--mono); font-size: 10px; color: var(--ink4); margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: .08em; }
.drop-cta { display: inline-flex; align-items: center; gap: 6px; padding: 9px 24px; background: var(--ink); color: var(--white); font-size: 12px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; transition: background .15s; }
.drop-cta:hover { background: var(--accent); }
.fmt-chips { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 1.25rem; }
.fmt-chip { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; background: var(--white2); border: 1px solid var(--rule); font-family: var(--mono); font-size: 10px; color: var(--ink4); text-transform: uppercase; letter-spacing: .06em; }
.trust-note { display: flex; align-items: flex-start; gap: 10px; padding: .875rem 1rem; border: 1px solid var(--rule); background: var(--white2); }
.tn-ico { font-size: 13px; flex-shrink: 0; margin-top: 1px; opacity: .4; }
.tn-title { font-size: 12px; font-weight: 500; color: var(--ink2); margin-bottom: 2px; }
.tn-sub { font-size: 11px; color: var(--ink3); line-height: 1.6; font-weight: 300; }

/* Loading */
.loading-right { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem; background: var(--white); }
.ald-ring { position: relative; width: 44px; height: 44px; }
.ald-ring::before { content: ''; position: absolute; inset: 0; border-radius: 50%; border: 1px solid var(--rule); }
.ald-ring::after { content: ''; position: absolute; inset: 0; border-radius: 50%; border: 1px solid transparent; border-top-color: var(--ink); animation: spin .8s linear infinite; }
.ald-step { font-family: var(--display); font-size: 1.25rem; font-weight: 500; color: var(--ink); letter-spacing: -.02em; text-align: center; }
.ald-sub-t { font-family: var(--mono); font-size: 10px; color: var(--ink4); letter-spacing: .06em; text-transform: uppercase; }
.ald-bar { width: 220px; height: 1px; background: var(--rule); }
.ald-fill { height: 100%; background: var(--ink); transition: width .5s ease; }

/* Report sidebar */
.report-sidebar { width: 200px; flex-shrink: 0; background: #0B1119; border-right: 1px solid rgba(255,255,255,.06); padding: .875rem .75rem; overflow-y: auto; }
.report-main-area { flex: 1; overflow-y: auto; background: #0E1420; padding: 2rem 2.5rem; }

/* Report components */
.rp { background: #141B26; border: 1px solid rgba(255,255,255,.07); margin-bottom: 1.5rem; overflow: hidden; }
.rp-hdr { padding: 1rem 1.75rem; border-bottom: 1px solid rgba(255,255,255,.07); display: flex; align-items: baseline; gap: 8px; background: rgba(255,255,255,.02); }
.rp-hdr-t { font-family: var(--display); font-size: 15px; font-weight: 500; color: rgba(255,255,255,.85); letter-spacing: -.01em; }
.rp-hdr-sep { color: rgba(255,255,255,.2); }
.rp-hdr-s { font-size: 13px; color: rgba(255,255,255,.35); font-weight: 300; }
.rp-bdy { padding: 1.5rem 1.75rem; }
.rp-ft { padding: .65rem 1.75rem; border-top: 1px solid rgba(255,255,255,.07); background: rgba(255,255,255,.02); display: flex; align-items: center; justify-content: space-between; }
.rp-ft-logo { font-family: var(--display); font-size: 12px; font-weight: 600; color: rgba(255,255,255,.45); }
.rp-ft-txt { font-family: var(--mono); font-size: 9px; color: rgba(255,255,255,.2); }
.rp-ft-pg { font-family: var(--mono); font-size: 9px; color: rgba(255,255,255,.2); }
.rp-metrics { display: grid; grid-template-columns: repeat(5,1fr); gap: 1px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.06); margin-bottom: 1.25rem; }
.rp-m { background: #1A2233; padding: .9rem 1rem; }
.rp-m-lbl { font-family: var(--mono); font-size: 8px; text-transform: uppercase; letter-spacing: .12em; color: rgba(255,255,255,.28); margin-bottom: 5px; }
.rp-m-val { font-family: var(--display); font-size: 1.5rem; font-weight: 500; color: rgba(255,255,255,.9); letter-spacing: -.02em; }
.rp-m-val.good { color: #5aba5a; }
.rp-m-val.warn { color: #d4921e; }
.rp-m-val.bad  { color: #e06060; }
.rp-policies { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.05); margin-bottom: 1.25rem; }
.rp-pc { background: #1A2233; padding: 1rem 1.1rem; border-left: 2px solid rgba(255,255,255,.2); }
.rp-pc-name { font-size: 11px; font-weight: 400; color: rgba(255,255,255,.45); margin-bottom: .65rem; text-transform: uppercase; letter-spacing: .06em; font-family: var(--mono); }
.rp-pc-row { display: flex; justify-content: space-between; align-items: flex-end; }
.rp-pf-lbl { font-family: var(--mono); font-size: 8px; text-transform: uppercase; letter-spacing: .08em; color: rgba(255,255,255,.25); margin-bottom: 3px; }
.rp-pf-val { font-family: var(--display); font-size: 1.2rem; font-weight: 500; color: rgba(255,255,255,.85); letter-spacing: -.02em; }
.rp-badge { font-size: 10px; font-weight: 500; padding: 2px 7px; border: 1px solid; font-family: var(--mono); border-radius: 0; }
.rp-badge.good { background: rgba(45,122,45,.12); color: #5aba5a; border-color: rgba(45,122,45,.2); }
.rp-badge.warn { background: rgba(180,110,10,.12); color: #d4921e; border-color: rgba(180,110,10,.2); }
.rp-badge.bad  { background: rgba(180,40,40,.12); color: #e06060; border-color: rgba(180,40,40,.2); }
.rp-charts { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,.05); margin-bottom: 1px; }
.rp-chart { background: #1A2233; border: none; padding: 1rem 1.1rem; }
.rp-chart-lbl { font-family: var(--mono); font-size: 8px; font-weight: 500; text-transform: uppercase; letter-spacing: .12em; color: rgba(255,255,255,.25); margin-bottom: .65rem; }
.rp-chart-wrap { height: 140px; position: relative; }
.rp-pol-hdr { display: grid; grid-template-columns: auto repeat(4,1fr); gap: 1px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.06); margin-bottom: 1.25rem; }
.rp-pol-name { background: #1A2233; font-family: var(--display); font-size: 1.1rem; font-weight: 500; color: rgba(255,255,255,.8); letter-spacing: -.01em; line-height: 1.3; padding: 1rem; }
.rp-pol-m { background: #1A2233; padding: .75rem 1rem; }
.rp-pol-m-lbl { font-family: var(--mono); font-size: 8px; text-transform: uppercase; letter-spacing: .1em; color: rgba(255,255,255,.25); margin-bottom: 3px; }
.rp-pol-m-val { font-family: var(--display); font-size: 1.2rem; font-weight: 500; color: rgba(255,255,255,.85); letter-spacing: -.02em; }
.rp-tables { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,.05); margin-bottom: 1px; }
.rp-tbl { background: #1A2233; border: none; }
.rp-tbl-hdr { background: rgba(255,255,255,.04); padding: .5rem .9rem; font-family: var(--mono); font-size: 8px; font-weight: 500; text-transform: uppercase; letter-spacing: .1em; color: rgba(255,255,255,.25); display: grid; }
.rp-tbl-hdr.three { grid-template-columns: 1fr auto auto; }
.rp-tbl-row { display: grid; padding: .45rem .9rem; font-size: 12px; border-bottom: 1px solid rgba(255,255,255,.04); }
.rp-tbl-row:last-child { border-bottom: none; }
.rp-tbl-row.three { grid-template-columns: 1fr auto auto; }
.rp-tbl-row:nth-child(even) { background: rgba(255,255,255,.02); }
.rp-tbl-lbl { color: rgba(255,255,255,.35); font-size: 11px; }
.rp-tbl-val { text-align: right; font-weight: 400; color: rgba(255,255,255,.6); font-family: var(--mono); font-size: 11px; }
.det-wrap { overflow-x: auto; }
.det-tbl { width: 100%; border-collapse: collapse; font-size: 11px; }
.det-tbl th { background: rgba(255,255,255,.05); color: rgba(255,255,255,.25); padding: .5rem .75rem; text-align: left; font-family: var(--mono); font-size: 8px; text-transform: uppercase; letter-spacing: .1em; white-space: nowrap; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,.07); }
.det-tbl td { padding: .5rem .75rem; border-bottom: 1px solid rgba(255,255,255,.04); vertical-align: top; color: rgba(255,255,255,.5); }
.det-tbl tr:nth-child(even) td { background: rgba(255,255,255,.02); }
.det-tbl .row-lbl { font-weight: 500; color: rgba(255,255,255,.75); white-space: nowrap; }
.amt { text-align: right; font-family: var(--mono); }
.r-section { display: none; }
.r-section.active { display: block; }

/* Loss Control Interview section */
.lci-loading { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:4rem 2rem; gap:1.25rem; }
.lci-loading-ring { position:relative; width:36px; height:36px; }
.lci-loading-ring::before { content:''; position:absolute; inset:0; border-radius:50%; border:2px solid var(--border); }
.lci-loading-ring::after { content:''; position:absolute; inset:0; border-radius:50%; border:2px solid transparent; border-top-color:rgba(255,255,255,.6); animation:spin .75s linear infinite; }
.lci-loading-t { font-family:var(--mono); font-size:11px; color:rgba(255,255,255,.3); text-transform:uppercase; letter-spacing:.1em; }
.lci-category { margin-bottom:1.75rem; }
.lci-category-hdr { display:flex; align-items:center; gap:10px; margin-bottom:1rem; padding-bottom:.75rem; border-bottom:1px solid rgba(255,255,255,.07); }
.lci-category-name { font-family:var(--mono); font-size:9px; font-weight:500; text-transform:uppercase; letter-spacing:.14em; color:rgba(255,255,255,.35); }
.lci-category-line { flex:1; height:1px; background:rgba(255,255,255,.05); }
.lci-q { display:flex; gap:1rem; margin-bottom:1rem; padding:.875rem 1rem; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.06); border-left:2px solid rgba(255,255,255,.15); }
.lci-q-num { font-family:var(--mono); font-size:10px; color:rgba(255,255,255,.2); flex-shrink:0; margin-top:1px; min-width:18px; }
.lci-q-body { flex:1; }
.lci-q-text { font-size:13px; font-weight:400; color:rgba(255,255,255,.8); line-height:1.65; margin-bottom:.5rem; }
.lci-q-why { font-family:var(--mono); font-size:10px; color:rgba(255,255,255,.3); line-height:1.5; }
.lci-notes { margin-top:.5rem; padding:.5rem .75rem; background:rgba(255,255,255,.02); border:1px dashed rgba(255,255,255,.07); font-family:var(--mono); font-size:10px; color:rgba(255,255,255,.15); border-radius:0; }
.lci-q.priority { border-left-color:rgba(239,68,68,.5); background:rgba(239,68,68,.04); }
.lci-q.priority .lci-q-num { color:rgba(239,68,68,.5); }

/* Modal */
.modal-overlay { display: none; position: fixed; inset: 0; z-index: 500; background: rgba(0,0,0,.6); backdrop-filter: blur(4px); align-items: center; justify-content: center; padding: 1rem; }
.modal-overlay.open { display: flex; }
.modal { background: var(--white); border: 1px solid var(--rule); border-radius: 0; padding: 2.25rem; width: 100%; max-width: 460px; box-shadow: 0 24px 64px rgba(10,22,40,.15); }
.modal-title { font-family: var(--display); font-size: 1.5rem; font-weight: 500; color: var(--ink); letter-spacing: -.02em; margin-bottom: .4rem; }
.modal-sub { font-size: 13px; color: var(--ink3); font-weight: 300; margin-bottom: 1.75rem; }
.modal-footer { display: flex; gap: 8px; justify-content: flex-end; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--rule); }

/* Responsive */
@media(max-width: 960px) {
  .auth-left, .l-hero-right { display: none; }
  .auth-wrap { grid-template-columns: 1fr; }
  .l-hero-grid { grid-template-columns: 1fr; }
  .l-feat-grid, .l-plans { grid-template-columns: 1fr 1fr; }
  .l-cta { grid-template-columns: 1fr; }
  .rp-metrics { grid-template-columns: repeat(3,1fr); }
  .rp-policies, .rp-charts, .rp-tables, .rp-pol-hdr { grid-template-columns: 1fr; }
  .app-sidebar, .upload-left, .report-sidebar { display: none; }
  .ct-head, .ct-row { grid-template-columns: 2fr 1fr 1fr 88px; }
  .ct-hc:nth-child(4), .ct-hc:nth-child(5), .ct-row > *:nth-child(4), .ct-row > *:nth-child(5) { display: none; }
  .cv-layout { grid-template-columns: 1fr; }
  .dash-stats { grid-template-columns: repeat(2,1fr); }
}
@media print {
  #page-landing, #page-auth, .app-hdr, .app-sidebar, .report-sidebar { display: none !important; }
  .r-section { display: block !important; page-break-after: always; }
  body { background: #fff; overflow: auto; color: #000; }
  .rp, .rp-m, .rp-pc, .rp-chart, .rp-tbl, .rp-pol-m { background: #fff !important; border-color: #ddd !important; }
  .rp-hdr, .rp-tbl-hdr, .det-tbl th { background: #1a1a1a !important; }
  .rp-m-val, .rp-pf-val, .rp-pol-m-val, .rp-hdr-t, .cv-h1 { color: #000 !important; }
  .rp-hdr-t, .rp-hdr-s, .rp-ft-logo, .rp-tbl-hdr span, .det-tbl th { color: #fff !important; }
}
</style>
</head>
<body>

<!-- ════════ LANDING ════════ -->
<div id="page-landing" class="page active">

  <!-- NAV -->
  <nav class="l-nav">
    <div class="l-logo">
      <span class="l-logo-v">V</span><span class="l-logo-rest">antage</span>
    </div>
    <div class="l-nav-links">
      <a class="l-nav-a" href="#features">How it works</a>
      <a class="l-nav-a" href="#pricing">Pricing</a>
    </div>
    <div class="l-nav-right">
      <button class="btn btn-sm" style="background:transparent;border-color:rgba(250,250,248,.25);color:rgba(250,250,248,.7);" onclick="showPage('auth','login')">Sign in</button>
      <button class="btn btn-sm" style="background:var(--white);border-color:var(--white);color:var(--ink);font-weight:600;" onclick="showPage('auth','signup')">Get access</button>
    </div>
  </nav>

  <!-- HERO -->
  <div class="l-hero">
    <div class="l-hero-grid">
      <!-- Left: editorial text -->
      <div class="l-hero-left">
        <div class="l-hero-kicker">Built for commercial lines producers</div>
        <h1 class="l-h1">Win more accounts.<br>Retain every<br><em>renewal.</em></h1>
        <div class="l-hero-rule"></div>
        <p class="l-sub">Vantage is a full commercial risk analysis platform. Upload any insurance document — policies, claims histories, certificates — and get a complete risk profile your prospect has never seen and your competitor can't produce.</p>
        <div class="l-hero-btns">
          <button class="btn btn-ink btn-lg" onclick="showPage('auth','signup')">Start free trial</button>
          <button class="btn btn-outline btn-lg" onclick="showPage('auth','login')">Sign in</button>
        </div>
        <div class="l-hero-stats">
          <div class="l-hstat">
            <div class="l-hstat-n">New biz</div>
            <div class="l-hstat-l">Faster to quote &amp; bind</div>
          </div>
          <div class="l-hstat">
            <div class="l-hstat-n">Renewal</div>
            <div class="l-hstat-l">Retention improves with data</div>
          </div>
          <div class="l-hstat">
            <div class="l-hstat-n">&lt;30s</div>
            <div class="l-hstat-l">Document to full risk analysis</div>
          </div>
        </div>
      </div>

      <!-- Right: dashboard preview -->
      <div class="l-hero-right">
        <div class="l-preview">
          <!-- App header strip -->
          <div class="l-preview-header">
            <div class="l-preview-brand">Vantage</div>
            <div class="l-preview-date">Dashboard · Q2 2026</div>
          </div>

          <!-- Stats row -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--rule2);border-bottom:1px solid var(--rule);">
            <div style="background:var(--white);padding:.875rem 1rem;">
              <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--ink4);margin-bottom:5px;">Clients</div>
              <div style="font-family:var(--display);font-size:1.6rem;font-weight:500;color:var(--ink);letter-spacing:-.02em;line-height:1;">47</div>
            </div>
            <div style="background:var(--white);padding:.875rem 1rem;">
              <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--ink4);margin-bottom:5px;">Avg loss ratio</div>
              <div style="font-family:var(--display);font-size:1.6rem;font-weight:500;color:#92400e;letter-spacing:-.02em;line-height:1;">68%</div>
            </div>
            <div style="background:var(--white);padding:.875rem 1rem;">
              <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:var(--ink4);margin-bottom:5px;">Reports</div>
              <div style="font-family:var(--display);font-size:1.6rem;font-weight:500;color:var(--ink);letter-spacing:-.02em;line-height:1;">312</div>
            </div>
          </div>

          <!-- Client table -->
          <div class="l-preview-body" style="padding:0;">
            <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.14em;color:var(--ink4);padding:.75rem 1.25rem .5rem;border-bottom:1px solid var(--rule2);">Your book of business</div>

            <!-- Table header -->
            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 72px;padding:.4rem 1.25rem;background:var(--white2);border-bottom:1px solid var(--rule);">
              <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink4);">Client</div>
              <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink4);">Premium</div>
              <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink4);">Loss ratio</div>
              <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink4);">Status</div>
            </div>

            <!-- Rows -->
            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 72px;padding:.65rem 1.25rem;border-bottom:1px solid var(--rule2);align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:500;color:var(--ink);">Apex HVAC LLC</div>
                <div style="font-family:var(--mono);font-size:9px;color:var(--ink4);margin-top:1px;">Texas · Commercial</div>
              </div>
              <div style="font-family:var(--mono);font-size:11px;color:var(--ink2);">$1.27M</div>
              <div style="font-family:var(--mono);font-size:11px;color:#2d7a2d;">40%</div>
              <div><span style="display:inline-block;padding:2px 8px;font-family:var(--mono);font-size:9px;font-weight:500;background:rgba(45,122,45,.08);color:#2d7a2d;border:1px solid rgba(45,122,45,.18);">Healthy</span></div>
            </div>

            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 72px;padding:.65rem 1.25rem;border-bottom:1px solid var(--rule2);align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:500;color:var(--ink);">Crestwood Roofing</div>
                <div style="font-family:var(--mono);font-size:9px;color:var(--ink4);margin-top:1px;">Texas · Roofing</div>
              </div>
              <div style="font-family:var(--mono);font-size:11px;color:var(--ink2);">$890k</div>
              <div style="font-family:var(--mono);font-size:11px;color:#92400e;">82%</div>
              <div><span style="display:inline-block;padding:2px 8px;font-family:var(--mono);font-size:9px;font-weight:500;background:rgba(146,64,14,.08);color:#92400e;border:1px solid rgba(146,64,14,.18);">Review</span></div>
            </div>

            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 72px;padding:.65rem 1.25rem;border-bottom:1px solid var(--rule2);align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:500;color:var(--ink);">Delta Trucking Co.</div>
                <div style="font-family:var(--mono);font-size:9px;color:var(--ink4);margin-top:1px;">Texas · Trucking</div>
              </div>
              <div style="font-family:var(--mono);font-size:11px;color:var(--ink2);">$2.14M</div>
              <div style="font-family:var(--mono);font-size:11px;color:#991b1b;">109%</div>
              <div><span style="display:inline-block;padding:2px 8px;font-family:var(--mono);font-size:9px;font-weight:500;background:rgba(153,27,27,.08);color:#991b1b;border:1px solid rgba(153,27,27,.18);">At risk</span></div>
            </div>

            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 72px;padding:.65rem 1.25rem;border-bottom:1px solid var(--rule2);align-items:center;">
              <div>
                <div style="font-size:12px;font-weight:500;color:var(--ink);">Meadowbrook Electric</div>
                <div style="font-family:var(--mono);font-size:9px;color:var(--ink4);margin-top:1px;">Texas · Electrical</div>
              </div>
              <div style="font-family:var(--mono);font-size:11px;color:var(--ink2);">$540k</div>
              <div style="font-family:var(--mono);font-size:11px;color:#2d7a2d;">34%</div>
              <div><span style="display:inline-block;padding:2px 8px;font-family:var(--mono);font-size:9px;font-weight:500;background:rgba(45,122,45,.08);color:#2d7a2d;border:1px solid rgba(45,122,45,.18);">Healthy</span></div>
            </div>

            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 72px;padding:.65rem 1.25rem;align-items:center;opacity:.55;">
              <div>
                <div style="font-size:12px;font-weight:500;color:var(--ink);">Summit Plumbing Inc.</div>
                <div style="font-family:var(--mono);font-size:9px;color:var(--ink4);margin-top:1px;">Texas · Plumbing</div>
              </div>
              <div style="font-family:var(--mono);font-size:11px;color:var(--ink2);">$320k</div>
              <div style="font-family:var(--mono);font-size:11px;color:#92400e;">71%</div>
              <div><span style="display:inline-block;padding:2px 8px;font-family:var(--mono);font-size:9px;font-weight:500;background:rgba(146,64,14,.08);color:#92400e;border:1px solid rgba(146,64,14,.18);">Review</span></div>
            </div>
          </div>

          <div class="lp-footer">
            <div class="lpf-brand">Vantage</div>
            <div class="lpf-meta">Updated just now · 47 accounts</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TICKER -->
  <div class="l-ticker">
    <div class="l-ticker-track">
      <div class="l-ticker-item"><span class="l-ticker-n">Any carrier</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Any insurance document type</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">New business</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Win accounts with data your competitor doesn't have</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">Renewals</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Retain clients by showing your work</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">&lt;30s</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Document to full risk analysis</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">Any carrier</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Policies, claims histories, certificates</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">All lines</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">WC · CPP · Auto · GL</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">New business</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Win accounts with data your competitor doesn't have</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">Renewals</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Retain clients by showing your work</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">&lt;30s</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Document to full risk analysis</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">Any carrier</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">Policies, claims histories, certificates</span></div>
      <div class="l-ticker-item"><span class="l-ticker-n">All lines</span><span class="l-ticker-sep">—</span><span class="l-ticker-l">WC · CPP · Auto · GL</span></div>
    </div>
  </div>

  <!-- FEATURES -->
  <div class="l-features" id="features">
    <div class="l-section-top">
      <div>
        <div class="l-section-kicker">Two outcomes. One platform.</div>
        <h2 class="l-h2">Win the account.<br><em>Keep the client.</em></h2>
      </div>
      <div style="max-width:340px;font-size:14px;color:var(--ink3);line-height:1.75;font-weight:300;">
        The agents who win new commercial accounts arrive with data their prospect has never seen. The ones who keep clients at renewal explain it — they don't just deliver it.
      </div>
    </div>
    <div class="l-feat-grid">
      <div class="l-feat">
        <div class="l-feat-num">01</div>
        <div class="l-feat-title">New Business<br>Advantage</div>
        <div class="l-feat-desc">Upload a prospect's policy or loss history before your first meeting. Arrive with a complete risk analysis — benchmarked, gap-flagged, and benchmarked against their industry — that their incumbent agent has never produced.</div>
      </div>
      <div class="l-feat">
        <div class="l-feat-num">02</div>
        <div class="l-feat-title">Renewal<br>Transparency</div>
        <div class="l-feat-desc">Show clients exactly why their premium changed — with charts, trend lines, and claim breakdowns. Transparent data builds trust. Trust drives retention.</div>
      </div>
      <div class="l-feat">
        <div class="l-feat-num">03</div>
        <div class="l-feat-title">Coverage Gap<br>Diagnosis</div>
        <div class="l-feat-desc">Identify where a prospect's current coverage is underweight against their actual claims history. Walk in with a recommendation, not just a competing quote.</div>
      </div>
      <div class="l-feat">
        <div class="l-feat-num">04</div>
        <div class="l-feat-title">Stewardship<br>Reports</div>
        <div class="l-feat-desc">Branded, printable risk reports your clients will actually read. Multi-year trends, coverage analysis, claim patterns, and actionable recommendations — produced in under 30 seconds.</div>
      </div>
    </div>
  </div>

  <!-- QUOTE BAND -->
  <div class="l-quote-band">
    <div class="l-quote-inner">
      <div class="l-quote-mark">"</div>
      <p class="l-quote-text">I closed a $2.4M commercial account last quarter because I showed the prospect a full risk analysis on their current book. Their incumbent agent had never done that. Vantage made it a 20-minute prep.</p>
      <div class="l-quote-attr">Commercial Lines Producer &nbsp;·&nbsp; Houston, Texas</div>
    </div>
  </div>

  <!-- PRICING -->
  <div class="l-pricing" id="pricing">
    <div class="l-pricing-inner">
      <div class="l-pricing-head">
        <div>
          <div class="l-section-kicker">Pricing</div>
          <h2 class="l-h2">One tool.<br><em>Two outcomes.</em></h2>
        </div>
        <div style="max-width:300px;font-size:14px;color:var(--ink3);line-height:1.75;font-weight:300;">
          Start free. No card required. If Vantage doesn't help you win a new account or save a renewal in your first month, you haven't lost a thing.
        </div>
      </div>
      <div class="l-plans">
        <div class="l-plan">
          <div class="l-plan-tier">Starter</div>
          <div class="l-plan-price">$0</div>
          <div class="l-plan-period">Free · 10 reports per month</div>
          <div class="l-plan-divider"></div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>10 risk analyses per month</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>New business risk profiles</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Transparent renewal reports</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Client workspace + PDF export</div>
          <button class="l-plan-btn" style="background:var(--ink);color:var(--white);border-color:var(--ink);" onclick="showPage('auth','signup')">Get started free</button>
        </div>
        <div class="l-plan featured">
          <div class="l-plan-tier">Pro</div>
          <div class="l-plan-price">$299</div>
          <div class="l-plan-period">Per month · billed monthly</div>
          <div class="l-plan-divider"></div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Unlimited risk analyses</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Industry benchmark comparisons</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Coverage gap &amp; opportunity finder</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Full document suite — policy, loss history, COI</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Priority support</div>
          <button class="l-plan-btn" style="background:var(--white);color:var(--ink);border-color:var(--white);" onclick="showPage('auth','signup')">Start Pro trial</button>
        </div>
        <div class="l-plan">
          <div class="l-plan-tier">Agency</div>
          <div class="l-plan-price">$799</div>
          <div class="l-plan-period">Per month · up to 10 agents</div>
          <div class="l-plan-divider"></div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Everything in Pro</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Up to 10 producer seats</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>White-label branded reports</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Agency-wide book overview</div>
          <div class="l-plan-item"><span class="l-plan-dash">—</span>Dedicated account manager</div>
          <button class="l-plan-btn" style="background:transparent;color:var(--ink);border-color:var(--ink);" onclick="showPage('auth','signup')">Contact us</button>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <div class="l-cta">
    <div class="l-cta-left">
      <div class="l-section-kicker" style="margin-bottom:1.5rem;">Get started</div>
      <h2 class="l-cta-h2">The agents who win<br><em>show their work.</em></h2>
      <p class="l-cta-p" style="margin-top:1rem;">Prospects trust agents who arrive with analysis, not just a quote. Clients stay with agents who explain the risk, not just the premium. Vantage makes both possible — for any account, in under 30 seconds.</p>
    </div>
    <div class="l-cta-right">
      <div class="l-cta-form-h">Start winning more accounts</div>
      <div class="l-cta-form-sub">Free trial · No card needed · First report in 60 seconds</div>
      <div class="field"><label>Work email</label><input type="email" id="cta-email" placeholder="you@agency.com"/></div>
      <button class="btn btn-ink" style="width:100%;padding:12px;font-size:12px;letter-spacing:.06em;justify-content:center;" onclick="showPage('auth','signup')">Get started free →</button>
      <div style="margin-top:1rem;font-size:12px;color:var(--ink4);text-align:center;font-family:var(--mono);">Already have an account? <a style="color:var(--ink);cursor:pointer;text-decoration:underline;" onclick="showPage('auth','login')">Sign in</a></div>
    </div>
  </div>

  <footer class="l-footer">
    <div class="l-footer-logo">Vantage</div>
    <div class="l-footer-links">
      <a class="l-footer-link" href="#">Privacy</a>
      <a class="l-footer-link" href="#">Terms</a>
      <a class="l-footer-link" href="#">Contact</a>
    </div>
    <div class="l-footer-copy" style="font-family:var(--mono);font-size:10px;color:var(--ink4);">© 2026 Vantage · All rights reserved</div>
  </footer>

</div>

<!-- ════════ AUTH ════════ -->
<div id="page-auth" class="page">
  <div class="auth-wrap">
    <div class="auth-left">
      <div class="auth-brand">Vantage</div>
      <div class="auth-left-content">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:1rem;"><div style="width:18px;height:2px;background:var(--gold);border-radius:1px;"></div><span style="font-family:var(--mono);font-size:10px;color:var(--gold);text-transform:uppercase;letter-spacing:.14em;">Agent platform</span></div>
        <div class="auth-h">Your entire book.<br><i>One platform.</i></div>
        <p class="auth-p">The producers who win new commercial business arrive with data. The ones who retain at renewal show their work. Vantage is built to help you do both.</p>
        <div class="auth-pills">
          <div class="auth-pill"><div class="auth-pill-n">Any</div><div class="auth-pill-l">Carrier, any document type</div></div>
          <div class="auth-pill"><div class="auth-pill-n">8 hrs</div><div class="auth-pill-l">Saved per agent, per week</div></div>
          <div class="auth-pill"><div class="auth-pill-n">&lt;30s</div><div class="auth-pill-l">Document to full risk analysis</div></div>
        </div>
      </div>
    </div>
    <div class="auth-right">
      <div class="auth-form" id="auth-form-container"><!-- filled by JS --></div>
    </div>
  </div>
</div>

<!-- ════════ APP ════════ -->
<div id="page-app" class="page">
  <div class="app-hdr">
    <div class="app-logo"><div class="app-logo-dot"></div>Vantage</div>
    <span class="app-sep">/</span>
    <div class="app-bc" id="app-bc">Dashboard</div>
    <div class="app-hdr-right">
      <div class="agent-pill"><div class="agent-av" id="agent-av">?</div><span id="agent-name-display">Agent</span></div>
      <button class="btn btn-ghost btn-sm" onclick="logout()">Log out</button>
    </div>
  </div>
  <div class="app-body">
    <div class="app-sidebar">
      <div class="sb-lbl">Menu</div>
      <div class="sb-item active" id="sb-dashboard" onclick="navTo('dashboard')"><div class="sb-dot"></div>Dashboard</div>
      <div class="sb-item" id="sb-new-report" onclick="navTo('upload')"><div class="sb-dot"></div>New report</div>
      <div class="sb-spacer"></div>
      <div class="sb-item" onclick="logout()"><div class="sb-dot"></div>Log out</div>
    </div>
    <div class="app-main" id="app-main">

      <!-- Dashboard view -->
      <div class="view active" id="view-dashboard">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;">
          <div class="dash-h1" id="dash-greeting">Dashboard</div>
          <button class="btn btn-gold" onclick="showModal('new-client')">+ Add client</button>
        </div>
        <div class="dash-stats">
          <div class="dash-stat"><div class="ds-lbl">Total clients</div><div class="ds-val" id="stat-clients">—</div><div class="ds-sub">In your book</div></div>
          <div class="dash-stat"><div class="ds-lbl">Reports generated</div><div class="ds-val" id="stat-reports">—</div><div class="ds-sub">All time</div></div>
          <div class="dash-stat"><div class="ds-lbl">Avg loss ratio</div><div class="ds-val" id="stat-avg-lr">—</div><div class="ds-sub">Across your book</div></div>
          <div class="dash-stat"><div class="ds-lbl">Plan</div><div class="ds-val" id="stat-plan" style="font-size:16px;text-transform:capitalize;">—</div><div class="ds-sub" style="margin-top:5px;"><a href="#" style="color:var(--gold2);font-size:11px;font-family:var(--mono);">Upgrade →</a></div></div>
        </div>
        <div class="clients-bar">
          <div class="clients-bar-title">Your clients</div>
          <div style="display:flex;gap:8px;">
            <input class="search-input" id="client-search" placeholder="Search clients..." oninput="filterClients()"/>
            <button class="btn btn-navy btn-sm" onclick="showModal('new-client')">+ Add client</button>
          </div>
        </div>
        <div class="clients-tbl">
          <div class="ct-head">
            <div class="ct-hc">Client</div>
            <div class="ct-hc">Industry</div>
            <div class="ct-hc">State</div>
            <div class="ct-hc">Loss ratio</div>
            <div class="ct-hc">Reports</div>
            <div class="ct-hc">Updated</div>
          </div>
          <div id="clients-list"><div class="ct-empty"><div class="ct-empty-ico">📋</div>No clients yet — add your first client to get started</div></div>
        </div>
      </div>

      <!-- Client view -->
      <div class="view" id="view-client">
        <div class="cv-back" onclick="navTo('dashboard')">← Back to dashboard</div>
        <div class="cv-header">
          <div>
            <div class="cv-h1" id="cv-name">Client</div>
            <div class="cv-meta" id="cv-meta">Industry · State</div>
          </div>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-ghost btn-sm" onclick="showModal('edit-client')">Edit</button>
            <button class="btn btn-gold" onclick="navTo('upload')">+ New report</button>
          </div>
        </div>
        <div class="cv-layout">
          <div>
            <div class="cv-reports">
              <div class="cv-reports-head">
                <div class="cv-reports-title">Reports</div>
              </div>
              <div id="cv-reports-list"><div class="cv-empty">No analyses yet — upload a document to generate your first risk analysis</div></div>
            </div>
          </div>
          <div>
            <div class="cv-info">
              <div class="cvi-title">Client info</div>
              <div class="cvi-row"><span class="cvi-lbl">Industry</span><span class="cvi-val" id="cvi-industry">—</span></div>
              <div class="cvi-row"><span class="cvi-lbl">State</span><span class="cvi-val" id="cvi-state">—</span></div>
              <div class="cvi-row"><span class="cvi-lbl">Contact</span><span class="cvi-val" id="cvi-contact">—</span></div>
              <div class="cvi-row"><span class="cvi-lbl">Email</span><span class="cvi-val" id="cvi-email">—</span></div>
              <div class="cvi-row"><span class="cvi-lbl">Phone</span><span class="cvi-val" id="cvi-phone">—</span></div>
              <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--line2);">
                <button class="btn btn-danger btn-sm" style="width:100%;" onclick="deleteClient()">Delete client</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upload / Loading / Report (full-bleed overlays) -->
      <div class="full-bleed" id="view-upload">
        <div class="upload-left">
          <div class="upload-left-inner">
            <div class="ul-logo"><div class="ul-logo-dot"></div>Vantage</div>
            <div class="ul-tag"><div class="ul-tag-bar"></div><span class="ul-tag-lbl">New business · Renewal prep</span></div>
            <div class="ul-h">From document<br>to insight<br><i>in seconds.</i></div>
            <p class="ul-p">Upload any insurance document — policies, loss histories, certificates. Vantage builds a complete risk analysis benchmarked against the market and ready to present.</p>
            <div class="ul-pills">
              <div class="ul-pill"><div class="ul-pill-n">Any</div><div class="ul-pill-l">Carrier, any document type</div></div>
              <div class="ul-pill"><div class="ul-pill-n">8 hrs</div><div class="ul-pill-l">Saved per agent weekly</div></div>
              <div class="ul-pill"><div class="ul-pill-n">&lt;30s</div><div class="ul-pill-l">Doc to risk analysis</div></div>
            </div>
          </div>
        </div>
        <div class="upload-right">
          <div class="upload-form">
            <div class="uf-back" id="upload-back-btn">← Back</div>
            <div class="uf-title">Upload your documents</div>
            <div class="uf-sub" id="upload-for-label">Select a client and upload their documents</div>
            <div class="field" id="upload-client-field">
              <label>Client *</label>
              <select id="upload-client-select"><option value="">Select client...</option></select>
              <div class="field-hint" style="font-family:var(--mono);font-size:11px;color:var(--ink4);margin-top:4px;">Or <a href="#" style="color:var(--gold2);" onclick="showModal('new-client');return false;">add a new client</a></div>
            </div>
            <label class="drop-zone" id="drop-zone">
              <input type="file" id="file-input" accept=".pdf,.png,.jpg,.csv"/>
              <div class="drop-ico">📋</div>
              <div class="drop-t">Drop your document here</div>
              <div class="drop-s">PDF, PNG, JPG · any carrier</div>
              <div class="drop-cta">Browse files →</div>
            </label>
            <div class="fmt-chips">
              <span class="fmt-chip">📄 Loss Histories</span>
              <span class="fmt-chip">📋 ACORD Forms</span>
              <span class="fmt-chip">🗂️ Risk Analyses</span>
              <span class="fmt-chip">🚗 MVRs</span>
            </div>
            <div class="trust-note">
              <div class="tn-ico">🔒</div>
              <div><div class="tn-title">Your documents are private</div><div class="tn-sub">Processed and immediately discarded. Nothing stored or shared.</div></div>
            </div>
            <div id="upload-error-msg" style="margin-top:1rem;"></div>
          </div>
        </div>
      </div>

      <div class="full-bleed" id="view-loading">
        <div class="upload-left">
          <div class="upload-left-inner">
            <div class="ul-logo"><div class="ul-logo-dot"></div>Vantage</div>
            <div class="ul-tag"><div class="ul-tag-bar"></div><span class="ul-tag-lbl">Processing</span></div>
            <div class="ul-h">Analyzing<br>your document<i>...</i></div>
            <p class="ul-p">Vantage is reading your documents, benchmarking the account, and building your risk analysis.</p>
          </div>
        </div>
        <div class="loading-right">
          <div class="ald-ring"></div>
          <div style="text-align:center;">
            <div class="ald-step" id="ald-step">Reading document structure...</div>
            <div class="ald-sub-t" id="ald-sub">Reading your document</div>
          </div>
          <div class="ald-bar"><div class="ald-fill" id="ald-fill" style="width:0%"></div></div>
        </div>
      </div>

      <div class="full-bleed" id="view-report">
        <div class="report-sidebar">
          <div class="sb-lbl">Report</div>
          <div class="sb-item active" id="snav-summary" onclick="showSection('summary')"><div class="sb-dot"></div>Claim Summary</div>
          <div class="sb-item" id="snav-wc" onclick="showSection('wc')"><div class="sb-dot"></div>Workers Comp</div>
          <div class="sb-item" id="snav-cpp" onclick="showSection('cpp')"><div class="sb-dot"></div>Commercial Package</div>
          <div class="sb-item" id="snav-auto" onclick="showSection('auto')"><div class="sb-dot"></div>Commercial Auto</div>
          <div class="sb-item" id="snav-details" onclick="showSection('details')"><div class="sb-dot"></div>Claim Details</div>
          <div class="sb-item" id="snav-interview" onclick="showSection('interview')" style="position:relative;">
            <div class="sb-dot"></div>Loss Control Interview
            <span id="interview-badge" style="display:none;position:absolute;right:8px;top:50%;transform:translateY(-50%);width:7px;height:7px;border-radius:50%;background:var(--green);"></span>
          </div>
          <div class="sb-lbl">Actions</div>
          <div class="sb-item" onclick="window.print()"><div class="sb-dot"></div>Download PDF</div>
          <div class="sb-item" onclick="saveReport()"><div class="sb-dot"></div>Save report</div>
          <div class="sb-item" onclick="navTo('dashboard')"><div class="sb-dot"></div>← Dashboard</div>
        </div>
        <div class="report-main-area" id="report-main-area">
          <div id="rs-summary" class="r-section active"></div>
          <div id="rs-wc" class="r-section"></div>
          <div id="rs-cpp" class="r-section"></div>
          <div id="rs-auto" class="r-section"></div>
          <div id="rs-details" class="r-section"></div>
          <div id="rs-interview" class="r-section"></div>
        </div>
      </div>

    </div><!-- /app-main -->
  </div><!-- /app-body -->
</div><!-- /page-app -->

<!-- ════════ MODALS ════════ -->
<div class="modal-overlay" id="modal-new-client">
  <div class="modal">
    <div class="modal-title">Add new client</div>
    <div class="modal-sub">Create a workspace to organize their reports and data</div>
    <div id="nc-error"></div>
    <div class="field"><label>Business name *</label><input type="text" id="nc-name" placeholder="Apex Manufacturing LLC"/></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="field"><label>Industry</label><input type="text" id="nc-industry" placeholder="HVAC, Roofing, Trucking..."/></div>
      <div class="field"><label>State</label><input type="text" id="nc-state" placeholder="TX" maxlength="2"/></div>
    </div>
    <div class="field"><label>Contact name</label><input type="text" id="nc-contact" placeholder="John Smith"/></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="field"><label>Email</label><input type="email" id="nc-email" placeholder="john@company.com"/></div>
      <div class="field"><label>Phone</label><input type="tel" id="nc-phone" placeholder="(555) 000-0000"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" onclick="closeModal('new-client')">Cancel</button>
      <button class="btn btn-navy" onclick="createClient()">Create client</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-client">
  <div class="modal">
    <div class="modal-title">Edit client</div>
    <div class="modal-sub">Update client information</div>
    <div id="ec-error"></div>
    <div class="field"><label>Business name *</label><input type="text" id="ec-name"/></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="field"><label>Industry</label><input type="text" id="ec-industry"/></div>
      <div class="field"><label>State</label><input type="text" id="ec-state" maxlength="2"/></div>
    </div>
    <div class="field"><label>Contact name</label><input type="text" id="ec-contact"/></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="field"><label>Email</label><input type="email" id="ec-email"/></div>
      <div class="field"><label>Phone</label><input type="tel" id="ec-phone"/></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" onclick="closeModal('edit-client')">Cancel</button>
      <button class="btn btn-navy" onclick="updateClient()">Save changes</button>
    </div>
  </div>
</div>

<script>
// ═══════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════
let currentUser = null;
let currentToken = null;
let allClients = [];
let currentClient = null;
let currentReportData = null;
let uploadTargetClientId = null;

// ═══════════════════════════════════════════
// CHART UTILITIES (preserved)
// ═══════════════════════════════════════════
// ═══════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════
const charts={};
const f$=n=>!n?'$0':n>=1e6?'$'+(n/1e6).toFixed(2)+'M':n>=1000?'$'+Math.round(n/1000)+'k':'$'+n.toLocaleString();
const ff$=n=>'$'+(+n||0).toLocaleString();
const rc=r=>r<=50?'good':r<=80?'warn':'bad';
const DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// Chart defaults — cream-themed
const CD={responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'rgba(250,250,248,.4)',boxWidth:9,font:{size:10,family:'JetBrains Mono'}}},tooltip:{callbacks:{label:c=>c.dataset.label+': '+(c.raw>999?ff$(c.raw):c.raw)}}},scales:{x:{grid:{color:'rgba(255,255,255,.05)'},ticks:{color:'rgba(250,250,248,.3)',font:{size:9},maxRotation:28}},y:{grid:{color:'rgba(255,255,255,.05)'},ticks:{color:'rgba(250,250,248,.3)',font:{size:9}},beginAtZero:true}}};

function mkC(id,type,labels,datasets,extra={}){
  const el=document.getElementById(id);if(!el)return;
  if(charts[id]){try{charts[id].destroy();}catch(e){}}
  const opts=JSON.parse(JSON.stringify(CD));
  if(extra.y1){opts.scales.y1={position:'right',grid:{color:'rgba(15,30,46,.05)'},ticks:{color:'#6b6b6b',font:{size:9},callback:extra.y1cb||undefined},beginAtZero:true};}
  if(extra.ycb)opts.scales.y.ticks.callback=extra.ycb;
  charts[id]=new Chart(el,{type,data:{labels,datasets},options:opts});
}

const BAR='rgba(255,255,255,.35)',LINE='rgba(255,255,255,.7)',LINE2='rgba(255,255,255,.06)';
function ds_bar(d,label=''){return{label,data:d,backgroundColor:BAR,borderRadius:2};}
function ds_line(d,label='',color=LINE){return{label,data:d,type:'line',borderColor:color,backgroundColor:LINE2,fill:false,tension:.4,pointRadius:4,pointBackgroundColor:color,yAxisID:'y1'};}

// ═══════════════════════════════════════════
// PAGE NAVIGATION
// ═══════════════════════════════════════════
function showPage(page, subview) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  if (page === 'auth') renderAuthForm(subview || 'login');
  if (page === 'app') initApp();
}

// ═══════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════
function renderAuthForm(mode) {
  const isLogin = mode === 'login';
  const container = document.getElementById('auth-form-container');
  container.innerHTML = `
    <div class="auth-form-title">${isLogin ? 'Welcome back' : 'Create your account'}</div>
    <div class="auth-form-sub">${isLogin ? 'Log in to your Vantage workspace' : 'Start your free 14-day trial — no credit card required'}</div>
    <div id="auth-error"></div>
    ${!isLogin ? '<div class="field"><label>Full name</label><input type="text" id="auth-name" placeholder="Jane Smith"/></div>' : ''}
    ${!isLogin ? '<div class="field"><label>Agency name</label><input type="text" id="auth-agency" placeholder="Smith Insurance Group"/></div>' : ''}
    <div class="field"><label>Email address</label><input type="email" id="auth-email" placeholder="you@agency.com"/></div>
    <div class="field"><label>Password</label><input type="password" id="auth-password" placeholder="${isLogin ? 'Your password' : 'At least 8 characters'}"/></div>
    <button class="btn btn-navy" style="width:100%;padding:12px;font-size:14px;margin-top:.5rem;" onclick="${isLogin ? 'doLogin()' : 'doSignup()'}">
      ${isLogin ? 'Log in →' : 'Create account →'}
    </button>
    <div class="auth-switch">
      ${isLogin ? "Don't have an account? <a onclick=\"renderAuthForm('signup')\">Start free trial</a>" : "Already have an account? <a onclick=\"renderAuthForm('login')\">Log in</a>"}
    </div>
    <div style="margin-top:1.5rem;padding-top:1.5rem;border-top:1px solid var(--line2);text-align:center;">
      <button class="btn btn-ghost btn-sm" onclick="showPage('landing')">← Back to site</button>
    </div>`;

  // Enter key support
  setTimeout(() => {
    const pw = document.getElementById('auth-password');
    if (pw) pw.addEventListener('keydown', e => { if (e.key === 'Enter') isLogin ? doLogin() : doSignup(); });
    const em = document.getElementById('auth-email');
    if (em) em.focus();
  }, 50);
}

async function doSignup() {
  const name = (document.getElementById('auth-name')?.value || '').trim();
  const agency = (document.getElementById('auth-agency')?.value || '').trim();
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-error');

  if (!name || !email || !password) {
    errEl.innerHTML = '<div class="alert alert-error">Please fill in all required fields</div>';
    return;
  }
  if (password.length < 8) {
    errEl.innerHTML = '<div class="alert alert-error">Password must be at least 8 characters</div>';
    return;
  }

  errEl.innerHTML = '<div class="alert" style="background:var(--gold-bg);border:1px solid var(--gold-bd);color:var(--gold2);">Creating your account...</div>';

  try {
    const r = await fetch('/api/auth?action=signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, agency, email, password })
    });
    const data = await r.json();
    if (data.error) throw new Error(data.error);
    saveSession(data.token, data.user);
    showPage('app');
  } catch (err) {
    errEl.innerHTML = `<div class="alert alert-error">${err.message}</div>`;
  }
}

async function doLogin() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-error');

  if (!email || !password) {
    errEl.innerHTML = '<div class="alert alert-error">Please enter your email and password</div>';
    return;
  }

  errEl.innerHTML = '<div class="alert" style="background:var(--gold-bg);border:1px solid var(--gold-bd);color:var(--gold2);">Logging in...</div>';

  try {
    const r = await fetch('/api/auth?action=login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await r.json();
    if (data.error) throw new Error(data.error);
    saveSession(data.token, data.user);
    showPage('app');
  } catch (err) {
    errEl.innerHTML = `<div class="alert alert-error">${err.message}</div>`;
  }
}

function saveSession(token, user) {
  currentToken = token;
  currentUser = user;
  sessionStorage.setItem('vantage_token', token);
  sessionStorage.setItem('vantage_user', JSON.stringify(user));
}

function loadSession() {
  const token = sessionStorage.getItem('vantage_token');
  const user = sessionStorage.getItem('vantage_user');
  if (token && user) {
    currentToken = token;
    currentUser = JSON.parse(user);
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem('vantage_token');
  sessionStorage.removeItem('vantage_user');
  currentUser = null;
  currentToken = null;
  allClients = [];
  showPage('landing');
}

// ═══════════════════════════════════════════
// APP INIT
// ═══════════════════════════════════════════
async function initApp() {
  if (!currentUser) return;

  // Update header
  const name = currentUser.name || currentUser.email || 'Agent';
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('agent-av').textContent = initials;
  document.getElementById('agent-name-display').textContent = name.split(' ')[0];

  // Greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const dashGreet = document.getElementById('dash-greeting');
  if (dashGreet) dashGreet.textContent = `${greeting}, ${name.split(' ')[0]}`;

  // Stats
  document.getElementById('stat-plan').textContent = currentUser.plan || 'trial';

  navTo('dashboard');
  await loadClients();
}

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
function navTo(view) {
  // Hide full-bleed views
  document.querySelectorAll('.full-bleed').forEach(v => v.classList.remove('active'));
  // Hide regular views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  // Update sidebar
  document.querySelectorAll('.sb-item').forEach(i => i.classList.remove('active'));

  if (view === 'dashboard') {
    document.getElementById('view-dashboard').classList.add('active');
    document.getElementById('sb-dashboard').classList.add('active');
    document.getElementById('app-bc').innerHTML = 'Dashboard';
    document.getElementById('app-main').style.overflow = 'auto';
    loadClients();
  } else if (view === 'client') {
    document.getElementById('view-client').classList.add('active');
    document.getElementById('app-bc').innerHTML = `<span style="cursor:pointer;color:var(--ink4);" onclick="navTo('dashboard')">Dashboard</span> <span style="margin:0 4px;">/</span> <strong>${currentClient?.name || 'Client'}</strong>`;
    document.getElementById('app-main').style.overflow = 'auto';
    renderClientView();
  } else if (view === 'upload') {
    document.getElementById('view-upload').classList.add('active');
    document.getElementById('sb-new-report').classList.add('active');
    document.getElementById('app-bc').innerHTML = 'New Report';
    document.getElementById('app-main').style.overflow = 'hidden';
    prepareUploadView();
  } else if (view === 'loading') {
    document.getElementById('view-loading').classList.add('active');
    document.getElementById('app-main').style.overflow = 'hidden';
  } else if (view === 'report') {
    document.getElementById('view-report').classList.add('active');
    document.getElementById('app-bc').innerHTML = `<strong>Risk Analysis</strong>`;
    document.getElementById('app-main').style.overflow = 'hidden';
  }
}

// ═══════════════════════════════════════════
// CLIENTS
// ═══════════════════════════════════════════
async function loadClients() {
  try {
    const r = await fetch('/api/clients', {
      headers: { 'Authorization': 'Bearer ' + currentToken }
    });
    const data = await r.json();
    allClients = Array.isArray(data) ? data : [];
    renderClientsList(allClients);
    updateDashStats();
    populateClientDropdown();
  } catch (err) {
    console.error('Load clients error:', err);
  }
}

function updateDashStats() {
  document.getElementById('stat-clients').textContent = allClients.length;
  const totalReports = allClients.reduce((s, c) => s + (c.reports?.[0]?.count || 0), 0);
  document.getElementById('stat-reports').textContent = totalReports;

  const lrs = allClients.filter(c => c.loss_ratio).map(c => c.loss_ratio);
  const avgLr = lrs.length ? Math.round(lrs.reduce((a,b) => a+b, 0) / lrs.length * 10) / 10 : null;
  document.getElementById('stat-avg-lr').textContent = avgLr ? avgLr + '%' : '—';
}

function renderClientsList(clients) {
  const el = document.getElementById('clients-list');
  if (!clients.length) {
    el.innerHTML = '<div class="ct-empty"><div class="ct-empty-ico">📋</div>No clients yet — add your first client to get started</div>';
    return;
  }
  el.innerHTML = clients.map(c => {
    const lr = c.loss_ratio;
    const lrBadge = lr ? `<span class="ct-badge ${lr <= 50 ? 'good' : lr <= 80 ? 'warn' : 'bad'}">${lr}%</span>` : '<span class="ct-badge none">—</span>';
    const reportCount = c.reports?.[0]?.count || 0;
    const updated = c.updated_at ? new Date(c.updated_at).toLocaleDateString('en-US', {month:'short', day:'numeric'}) : '—';
    return `<div class="ct-row" onclick="openClient('${c.id}')">
      <div><div class="ct-name">${c.name}</div><div class="ct-sub">${c.contact_name || ''}</div></div>
      <div class="ct-cell">${c.industry || '—'}</div>
      <div class="ct-cell">${c.state || '—'}</div>
      <div>${lrBadge}</div>
      <div class="ct-cell">${reportCount}</div>
      <div class="ct-cell">${updated}</div>
    </div>`;
  }).join('');
}

function filterClients() {
  const q = document.getElementById('client-search').value.toLowerCase();
  const filtered = q ? allClients.filter(c =>
    (c.name || '').toLowerCase().includes(q) ||
    (c.industry || '').toLowerCase().includes(q) ||
    (c.state || '').toLowerCase().includes(q) ||
    (c.contact_name || '').toLowerCase().includes(q)
  ) : allClients;
  renderClientsList(filtered);
}

async function openClient(id) {
  try {
    const r = await fetch(`/api/clients?id=${id}`, {
      headers: { 'Authorization': 'Bearer ' + currentToken }
    });
    currentClient = await r.json();
    uploadTargetClientId = id;
    navTo('client');
  } catch (err) {
    console.error('Open client error:', err);
  }
}

function renderClientView() {
  if (!currentClient) return;
  const c = currentClient;
  document.getElementById('cv-name').textContent = c.name;
  document.getElementById('cv-meta').textContent = [c.industry, c.state].filter(Boolean).join(' · ') || 'No industry set';
  document.getElementById('cvi-industry').textContent = c.industry || '—';
  document.getElementById('cvi-state').textContent = c.state || '—';
  document.getElementById('cvi-contact').textContent = c.contact_name || '—';
  document.getElementById('cvi-email').textContent = c.contact_email || '—';
  document.getElementById('cvi-phone').textContent = c.contact_phone || '—';

  const reports = c.reports || [];
  const reportsEl = document.getElementById('cv-reports-list');
  if (!reports.length) {
    reportsEl.innerHTML = '<div class="cv-empty">No reports yet — click "New report" to generate one</div>';
    return;
  }
  reportsEl.innerHTML = reports.map(r => {
    const lr = r.loss_ratio;
    const badge = lr ? `<span class="ct-badge ${lr <= 50 ? 'good' : lr <= 80 ? 'warn' : 'bad'}" style="font-size:12px;">${lr}%</span>` : '';
    const date = new Date(r.created_at).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
    return `<div class="cr-row" onclick="openSavedReport('${r.id}')">
      <div class="cr-row-left">
        <div class="cr-row-name">${r.insured || r.document_name || 'Risk Analysis'}</div>
        <div class="cr-row-date">${date} · ${r.total_claims || 0} claims · ${ff$(r.total_premium || 0)} premium</div>
      </div>
      ${badge}
    </div>`;
  }).join('');
}

async function openSavedReport(reportId) {
  const report = (currentClient?.reports || []).find(r => r.id === reportId);
  if (!report) return;
  try {
    const data = typeof report.report_data === 'string' ? JSON.parse(report.report_data) : report.report_data;
    currentReportData = data;
    renderReport(data);
    navTo('report');
  } catch(e) {
    console.error('Open saved report error:', e);
  }
}

async function createClient() {
  const name = document.getElementById('nc-name').value.trim();
  if (!name) {
    document.getElementById('nc-error').innerHTML = '<div class="alert alert-error">Business name is required</div>';
    return;
  }
  const body = {
    name,
    industry: document.getElementById('nc-industry').value.trim(),
    state: document.getElementById('nc-state').value.trim().toUpperCase(),
    contact_name: document.getElementById('nc-contact').value.trim(),
    contact_email: document.getElementById('nc-email').value.trim(),
    contact_phone: document.getElementById('nc-phone').value.trim(),
  };
  try {
    const r = await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentToken },
      body: JSON.stringify(body)
    });
    const data = await r.json();
    if (data.error) throw new Error(data.error);
    closeModal('new-client');
    // Clear form
    ['nc-name','nc-industry','nc-state','nc-contact','nc-email','nc-phone'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
    document.getElementById('nc-error').innerHTML = '';
    await loadClients();
    // Open the new client
    currentClient = data;
    uploadTargetClientId = data.id;
    navTo('client');
  } catch (err) {
    document.getElementById('nc-error').innerHTML = `<div class="alert alert-error">${err.message}</div>`;
  }
}

async function updateClient() {
  if (!currentClient) return;
  const body = {
    name: document.getElementById('ec-name').value.trim(),
    industry: document.getElementById('ec-industry').value.trim(),
    state: document.getElementById('ec-state').value.trim().toUpperCase(),
    contact_name: document.getElementById('ec-contact').value.trim(),
    contact_email: document.getElementById('ec-email').value.trim(),
    contact_phone: document.getElementById('ec-phone').value.trim(),
  };
  if (!body.name) {
    document.getElementById('ec-error').innerHTML = '<div class="alert alert-error">Business name is required</div>';
    return;
  }
  try {
    await fetch(`/api/clients?id=${currentClient.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentToken },
      body: JSON.stringify(body)
    });
    closeModal('edit-client');
    Object.assign(currentClient, body);
    renderClientView();
    await loadClients();
  } catch (err) {
    document.getElementById('ec-error').innerHTML = `<div class="alert alert-error">${err.message}</div>`;
  }
}

function showEditClient() {
  if (!currentClient) return;
  document.getElementById('ec-name').value = currentClient.name || '';
  document.getElementById('ec-industry').value = currentClient.industry || '';
  document.getElementById('ec-state').value = currentClient.state || '';
  document.getElementById('ec-contact').value = currentClient.contact_name || '';
  document.getElementById('ec-email').value = currentClient.contact_email || '';
  document.getElementById('ec-phone').value = currentClient.contact_phone || '';
  showModal('edit-client');
}

async function deleteClient() {
  if (!currentClient) return;
  if (!confirm(`Delete "${currentClient.name}" and all their reports? This cannot be undone.`)) return;
  await fetch(`/api/clients?id=${currentClient.id}`, {
    method: 'DELETE',
    headers: { 'Authorization': 'Bearer ' + currentToken }
  });
  currentClient = null;
  navTo('dashboard');
  await loadClients();
}

function populateClientDropdown() {
  const sel = document.getElementById('upload-client-select');
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = '<option value="">Select client...</option>' +
    allClients.map(c => `<option value="${c.id}" ${c.id === current ? 'selected' : ''}>${c.name}</option>`).join('');
  if (uploadTargetClientId) sel.value = uploadTargetClientId;
}

// ═══════════════════════════════════════════
// UPLOAD & EXTRACTION
// ═══════════════════════════════════════════
function prepareUploadView() {
  populateClientDropdown();
  const backBtn = document.getElementById('upload-back-btn');
  if (backBtn) {
    backBtn.onclick = () => {
      if (currentClient) navTo('client');
      else navTo('dashboard');
    };
  }
  const label = document.getElementById('upload-for-label');
  if (label && currentClient) {
    label.textContent = `Generating report for: ${currentClient.name}`;
    document.getElementById('upload-client-field').style.display = 'none';
  } else if (label) {
    label.textContent = 'Select a client and upload their documents';
    document.getElementById('upload-client-field').style.display = 'block';
  }
  document.getElementById('upload-error-msg').innerHTML = '';
}

function setLoadingState(step, sub, pct) {
  const stepEl = document.getElementById('ald-step');
  const subEl = document.getElementById('ald-sub');
  const fillEl = document.getElementById('ald-fill');
  if (stepEl) stepEl.textContent = step;
  if (subEl) subEl.textContent = sub;
  if (fillEl) fillEl.style.width = pct + '%';
}

async function handleFileUpload(file) {
  if (!file) return;

  const clientId = uploadTargetClientId ||
    (document.getElementById('upload-client-select')?.value) ||
    null;

  if (!clientId) {
    document.getElementById('upload-error-msg').innerHTML =
      '<div class="alert alert-error">Please select a client before uploading</div>';
    return;
  }

  const allowed = ['application/pdf','image/png','image/jpeg','image/jpg','image/webp'];
  if (!allowed.includes(file.type) && !file.name.match(/\.(pdf|png|jpg|jpeg|webp)$/i)) {
    document.getElementById('upload-error-msg').innerHTML =
      '<div class="alert alert-error">Please upload a PDF or image file</div>';
    return;
  }

  uploadTargetClientId = clientId;
  navTo('loading');
  setLoadingState('Reading your document...', 'Connecting to Vantage', 10);

  try {
    await new Promise(r => setTimeout(r, 300));
    setLoadingState('Identifying document format...', 'Reading your document', 25);
    await new Promise(r => setTimeout(r, 300));
    setLoadingState('Extracting policy data...', 'Reading premiums, claims, and loss ratios', 50);

    const data = await extractFromPDF(file);

    setLoadingState('Structuring claim records...', 'Organizing by policy line', 80);
    await new Promise(r => setTimeout(r, 300));
    setLoadingState('Building risk analysis...', 'Generating charts and benchmarks', 95);
    await new Promise(r => setTimeout(r, 200));
    setLoadingState('Done!', 'Report ready', 100);
    await new Promise(r => setTimeout(r, 200));

    currentReportData = data;
    currentReportData._clientId = clientId;
    currentReportData._fileName = file.name;

    renderReport(data);
    navTo('report');

    // Auto-save in background — agent never has to click "save"
    autoSaveReport(data, clientId, file.name);
  } catch (err) {
    navTo('upload');
    let msg = err.message || 'Unknown error';
    if (msg.includes('Failed to fetch') || msg.includes('ECONNREFUSED')) {
      msg = 'Cannot reach Vantage server. Make sure it is running.';
    }
    document.getElementById('upload-error-msg').innerHTML =
      `<div class="alert alert-error">⚠ ${msg}</div>`;
  }
}

// ── Toast notification ────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.style.cssText = `
    position:fixed;bottom:2rem;right:2rem;z-index:9999;
    padding:.875rem 1.25rem;border-radius:10px;font-size:13px;font-weight:500;
    display:flex;align-items:center;gap:8px;
    box-shadow:0 8px 24px rgba(13,28,43,.18);
    transition:opacity .3s,transform .3s;
    background:${type === 'success' ? '#1a2744' : '#7f1d1d'};border:1px solid ${type === 'success' ? '#2563eb' : '#991b1b'};
    color:#fff;font-family:var(--sans);
  `;
  t.innerHTML = `<span>${type === 'success' ? '✓' : '⚠'}</span>${msg}`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; }, 2500);
  setTimeout(() => t.remove(), 2900);
}

// ── Auto-save report (called after every successful extraction) ───
async function autoSaveReport(data, clientId, fileName) {
  if (!clientId || !currentToken) return;
  try {
    const client = allClients.find(c => c.id === clientId) || currentClient;
    await fetch('/api/clients?save=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentToken },
      body: JSON.stringify({
        client_id: clientId,
        report_data: { ...data, industry: client?.industry || '', state: client?.state || '' },
        document_name: fileName || 'Risk Document',
      })
    });
    // Refresh client silently
    if (currentClient?.id === clientId) {
      const r = await fetch(`/api/clients?id=${clientId}`, { headers: { 'Authorization': 'Bearer ' + currentToken } });
      currentClient = await r.json();
    }
    await loadClients();
    showToast('Report saved to client account');
  } catch (err) {
    console.error('Auto-save error:', err);
  }
}

// ── Manual save (from sidebar button) ────────────────────────────
async function saveReport() {
  if (!currentReportData) return;
  const clientId = currentReportData._clientId || uploadTargetClientId;
  if (!clientId) { showToast('No client selected', 'error'); return; }
  await autoSaveReport(currentReportData, clientId, currentReportData._fileName);
}

// ═══════════════════════════════════════════
// MODALS
// ═══════════════════════════════════════════
function showModal(id) {
  document.getElementById('modal-' + id).classList.add('open');
  if (id === 'edit-client') showEditClient();
}
function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('open');
}
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// ═══════════════════════════════════════════
// REPORT FUNCTIONS (preserved from original)
// ═══════════════════════════════════════════

const EXTRACTION_PROMPT=`You are an expert insurance data analyst. The attached document is an insurance document — this may be a loss run, policy, stewardship report, certificate of insurance, or similar. Extract ALL data from it and return ONLY a single valid JSON object with no markdown, no explanation, nothing else.

Use this exact structure (use 0 for missing numbers, [] for missing arrays, empty string for missing strings):

{
  "insured": "name of insured company",
  "by": "prepared by name",
  "renewal": "renewal date string",
  "years": [array of integer years e.g. 2018,2019,2020,2021,2022],
  "totalPremium": number,
  "totalClaims": number,
  "lossRatio": number as percent e.g. 46.43,
  "premiums": [premium per year matching years],
  "lossRatios": [overall loss ratio percent per year],
  "closed": [closed claim count per year],
  "open": [open claim count per year],
  "incurred": [total incurred dollars per year],
  "reserves": [total reserves per year],
  "sev": {
    "labels": ["No Pay","<$5k","$5k-$10k","$10k-$20k","$20k-$50k","$50k-$100k",">$100k"],
    "amounts": [total incurred per bucket],
    "counts": [claim count per bucket]
  },
  "wc": {
    "p": [WC premium per year],
    "lr": [WC loss ratio percent per year],
    "claims": number, "inc": number, "ratio": number,
    "cl": [WC closed per year], "op": [WC open per year], "iby": [WC incurred per year],
    "avgC": number, "lag": number,
    "med": {"c": number, "a": number},
    "ind": {"c": number, "a": number},
    "body": [{"l":"body part","a":incurred,"c":count}],
    "cause": [{"l":"cause","a":incurred,"c":count}]
  },
  "cpp": {
    "p": [CPP premium per year], "lr": [CPP loss ratio per year],
    "claims": number, "inc": number, "ratio": number,
    "cl": [closed per year], "op": [open per year], "iby": [incurred per year],
    "avgC": number, "lag": number,
    "cov": [{"l":"coverage type","a":incurred,"c":count}],
    "dow": [incurred Sun-Sat 7 values], "dowC": [count Sun-Sat 7 values]
  },
  "auto": {
    "p": [Auto premium per year], "lr": [Auto loss ratio per year],
    "claims": number, "inc": number, "ratio": number,
    "cl": [closed per year], "op": [open per year], "iby": [incurred per year],
    "avgC": number, "lag": number,
    "cov": [{"l":"coverage type","a":incurred,"c":count}],
    "dow": [incurred Sun-Sat 7 values], "dowC": [count Sun-Sat 7 values]
  },
  "claims": [
    {"num":"claim number","st":"Open or Closed or Reserved","cl":"claimant","dol":"date of loss",
     "rep":"date reported","lag":"e.g. 2 day(s)","dow":"day of week","lit":"Yes or No",
     "cov":"coverage type","pol":"WC or CPP or Auto","desc":"description",
     "paid":"dollar string or dash","res":"dollar string or dash","inc":"dollar string or dash"}
  ]
}

If a policy line is absent set all its numbers to 0 and arrays to zeros matching years length.
Return ONLY the JSON object.`;

async function extractFromPDF(file){
  const base64=await fileToBase64(file);
  const mediaType=file.type||'application/pdf';

  const response=await fetch('/api/extract',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      model:'claude-sonnet-4-20250514',
      max_tokens:4096,
      messages:[{
        role:'user',
        content:[
          {type:'document',source:{type:'base64',media_type:mediaType,data:base64}},
          {type:'text',text:EXTRACTION_PROMPT}
        ]
      }]
    })
  });

  if(!response.ok){
    const err=await response.json().catch(()=>({}));
    throw new Error(err?.error?.message||`Server error ${response.status}`);
  }

  const result=await response.json();
  if(result.error) throw new Error(result.error.message||'Extraction failed');

  const raw=(result.content||[]).map(b=>b.text||'').join('').trim();
  const cleaned=raw.replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'').trim();
  const data=JSON.parse(cleaned);
  data.date=new Date().toLocaleDateString('en-US',{month:'numeric',day:'numeric',year:'numeric'});
  return data;
}

// ═══════════ LOADING UI ═══════════
function setLoadingState(step,sub,pct){
  document.getElementById('ald-step').textContent=step;
  document.getElementById('ald-sub').textContent=sub;
  document.getElementById('ald-fill').style.width=pct+'%';
}

// ═══════════ HANDLE FILE UPLOAD ═══════════
async function handleFileUpload(file){
  if(!file) return;
  const allowed=['application/pdf','image/png','image/jpeg','image/jpg','image/webp'];
  if(!allowed.includes(file.type)&&!file.name.match(/\.(pdf|png|jpg|jpeg|webp)$/i)){
    showUploadError('Please upload a PDF or image file.');
    return;
  }
  const prev=document.getElementById('upload-error');
  if(prev) prev.remove();

  document.getElementById('aup').style.display='none';
  document.getElementById('ald').style.display='flex';
  setLoadingState('Reading your document...','Connecting to Vantage server',10);

  try{
    await new Promise(r=>setTimeout(r,300));
    setLoadingState('Identifying document format...','Analyzing document structure',25);
    await new Promise(r=>setTimeout(r,300));
    setLoadingState('Extracting policy data...','Reading premiums, claims, and loss ratios',50);
    const data=await extractFromPDF(file);
    setLoadingState('Structuring claim records...','Organizing claims by policy line',80);
    await new Promise(r=>setTimeout(r,300));
    setLoadingState('Building Stewardship Report...','Generating charts and analysis',95);
    await new Promise(r=>setTimeout(r,200));
    setLoadingState('Finalizing...','Verification complete',100);
    await new Promise(r=>setTimeout(r,200));
    renderReport(data);
  } catch(err){
    document.getElementById('ald').style.display='none';
    document.getElementById('aup').style.display='flex';
    let msg=err.message||'Unknown error';
    if(msg.includes('Failed to fetch')||msg.includes('NetworkError')||msg.includes('ECONNREFUSED')){
      msg='Cannot reach the Vantage server. Make sure server.js is running:\n  node server.js';
    } else if(msg.includes('401')||msg.includes('invalid_api_key')){
      msg='Invalid API key. Restart server.js with a valid ANTHROPIC_API_KEY.';
    }
    showUploadError(msg);
  }
}

function showUploadError(msg){
  const prev=document.getElementById('upload-error');
  if(prev) prev.remove();
  const div=document.createElement('div');
  div.id='upload-error';
  div.style.cssText='margin-top:1rem;padding:.75rem 1rem;background:#fee2e2;border:1px solid #fca5a5;border-radius:8px;font-size:12px;color:#991b1b;font-family:var(--mono);line-height:1.55;white-space:pre-line;';
  div.textContent='⚠ '+msg;
  const target=document.querySelector('#aup > div:last-child > div') || document.getElementById('aup');
  target.appendChild(div);
}

function renderReport(data){
  Object.values(charts).forEach(c=>{try{c.destroy();}catch(e){}});
  document.getElementById('ald').style.display='none';
  document.getElementById('app-main').style.display='block';
  document.getElementById('app-sidebar').style.display='block';
  document.getElementById('abtn-new').style.display='';
  document.getElementById('abtn-pdf').style.display='';
  document.getElementById('app-bc').innerHTML=`<span>Reports</span><span style="margin:0 5px;color:#ccc;">›</span><strong>${data.insured}</strong>`;

  const footer=`Prepared on ${data.date} by ${data.by||'Vantage User'} using Vantage`;
  document.getElementById('rs-summary').innerHTML=buildSummary(data,footer);
  document.getElementById('rs-wc').innerHTML=buildPolicy('Workers\nCompensation',data.wc,data.years,'wc',footer,2);
  document.getElementById('rs-cpp').innerHTML=buildPolicy('Commercial Package\nPolicy (CPP)',data.cpp,data.years,'cpp',footer,3);
  document.getElementById('rs-auto').innerHTML=buildPolicy('Commercial\nAuto',data.auto,data.years,'auto',footer,4);
  document.getElementById('rs-details').innerHTML=buildDetails(data,footer);
  showSection('summary');
  requestAnimationFrame(()=>buildAllCharts(data));
}

function buildSummary(d,ft){
  const rc2=rc(d.lossRatio);
  return `<div class="rp">
    <div class="rp-hdr"><span class="rp-hdr-t">Stewardship Report</span><span class="rp-hdr-s">/ Claim Summary</span></div>
    <div class="rp-bdy">
      <div class="rp-metrics">
        <div class="rp-m"><div class="rp-m-lbl">Renewal date</div><div class="rp-m-val" style="font-size:13px;line-height:1.3;">${d.renewal}</div></div>
        <div class="rp-m"><div class="rp-m-lbl">Years of data</div><div class="rp-m-val">${d.years.length}</div></div>
        <div class="rp-m"><div class="rp-m-lbl">Total premium</div><div class="rp-m-val" style="font-size:14px;">${ff$(d.totalPremium)}</div></div>
        <div class="rp-m"><div class="rp-m-lbl">Total claims</div><div class="rp-m-val">${d.totalClaims}</div></div>
        <div class="rp-m"><div class="rp-m-lbl">Loss ratio</div><div class="rp-m-val ${rc2}">${d.lossRatio}%</div></div>
      </div>
      <div class="rp-policies">
        ${[['Workers Compensation',d.wc],['Commercial Package (CPP)',d.cpp],['Commercial Auto',d.auto]].map(([n,p])=>`
          <div class="rp-pc"><div class="rp-pc-name">${n}</div><div class="rp-pc-row">
            <div><div class="rp-pf-lbl">Premium</div><div class="rp-pf-val">${ff$(p.p.reduce((a,b)=>a+b,0))}</div></div>
            <div><div class="rp-pf-lbl">Claims</div><div class="rp-pf-val">${p.claims}</div></div>
            <div><div class="rp-pf-lbl">Loss ratio</div><span class="rp-badge ${rc(p.ratio)}">${p.ratio}%</span></div>
          </div></div>`).join('')}
      </div>
      <div class="rp-charts">
        <div class="rp-chart"><div class="rp-chart-lbl">Premium & Loss Ratio Trend</div><div class="rp-chart-wrap"><canvas id="rc-premium"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">Claim Count by Year</div><div class="rp-chart-wrap"><canvas id="rc-claims"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">Claim Severity</div><div class="rp-chart-wrap"><canvas id="rc-severity"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">Incurred & Reserves by Year</div><div class="rp-chart-wrap"><canvas id="rc-incurred"></canvas></div></div>
      </div>
    </div>
    <div class="rp-ft"><div class="rp-ft-logo">Vantage</div><div class="rp-ft-txt">${ft}</div><div class="rp-ft-pg">Page 1 of 5</div></div>
  </div>`;
}

function buildPolicy(name,p,years,id,ft,pg){
  return `<div class="rp">
    <div class="rp-hdr"><span class="rp-hdr-t">Stewardship Report</span><span class="rp-hdr-s">/ Claim Policy Analysis</span></div>
    <div class="rp-bdy">
      <div class="rp-pol-hdr">
        <div class="rp-pol-name">${name.replace('\n','<br>')}</div>
        <div class="rp-pol-m"><div class="rp-pol-m-lbl">Incurred loss</div><div class="rp-pol-m-val">${ff$(p.inc)}</div></div>
        <div class="rp-pol-m"><div class="rp-pol-m-lbl">Premium</div><div class="rp-pol-m-val">${ff$(p.p.reduce((a,b)=>a+b,0))}</div></div>
        <div class="rp-pol-m"><div class="rp-pol-m-lbl">Claims</div><div class="rp-pol-m-val">${p.claims}</div></div>
        <div class="rp-pol-m"><div class="rp-pol-m-lbl">Loss ratio</div><div class="rp-pol-m-val ${rc(p.ratio)}">${p.ratio}%</div></div>
      </div>
      <div class="rp-tables">
        <div class="rp-tbl">
          <div class="rp-tbl-hdr three"><span>Item</span><span>Occurrences</span><span>Total</span></div>
          ${(()=>{
            const rows=[
              ['Net Incurred Loss', p.netOcc!==undefined?p.netOcc:'–', ff$(p.inc)],
              ['Outstanding Reserves', '–', p.outstandingRes?ff$(p.outstandingRes):'–'],
              ['Paid', p.paidOcc!==undefined?p.paidOcc:'–', p.paid?ff$(p.paid):ff$(p.inc)],
              ['Closed Claims', p.claims, ff$(p.inc)],
              ...(p.med&&p.med.c?[['Medical Claims', p.med.c, ff$(p.med.a)]]:[]),
              ...(p.ind&&p.ind.c?[['Indemnity Claims', p.ind.c, ff$(p.ind.a)]]:[]),
              ['Avg. Claim Cost', '', ff$(p.avgC)],
              ['Avg. Lag Time (Days)', '', p.lag||'–'],
              ['Avg. Time to Close (Days)', '', p.avgClose||'–'],
            ];
            return rows.map(([l,o,v])=>`<div class="rp-tbl-row three"><span class="rp-tbl-lbl">${l}</span><span class="rp-tbl-val">${o}</span><span class="rp-tbl-val">${v}</span></div>`).join('');
          })()}
        </div>
        <div class="rp-tbl">
          <div class="rp-tbl-hdr three"><span>Injury Dynamics</span><span>Most Frequent</span><span>Avg / Severity</span></div>
          ${(()=>{
            const dyn=p.dyn||{};
            const rows=[
              ['Day of the Week', dyn.dayOfWeek||'–', '–'],
              ['City', dyn.city||'–', '–'],
              ['State', dyn.state||'–', '–'],
              ['Litigated', dyn.litigatedPct||'–', dyn.litigatedAmt||'–'],
              ['Non Litigated', dyn.nonLitigatedPct||'–', dyn.nonLitigatedAmt||'–'],
              ...(dyn.bodyPart?[['Body Part', dyn.bodyPart, '–']]:[]),
              ...(dyn.medicalOnlyPct?[['Medical Only', dyn.medicalOnlyPct, dyn.medicalOnlyAmt||'–']]:[]),
              ...(dyn.indemnityPct?[['Indemnity', dyn.indemnityPct, dyn.indemnityAmt||'–']]:[]),
            ];
            return rows.map(([l,m,v])=>`<div class="rp-tbl-row three"><span class="rp-tbl-lbl">${l}</span><span class="rp-tbl-val">${m}</span><span class="rp-tbl-val">${v}</span></div>`).join('');
          })()}
        </div>
      </div>
      <div class="rp-charts">
        <div class="rp-chart"><div class="rp-chart-lbl">Premium & Loss Ratio Trend</div><div class="rp-chart-wrap"><canvas id="rc-${id}-prem"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">Claim Count by Year</div><div class="rp-chart-wrap"><canvas id="rc-${id}-claims"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">${id==='wc'?'Incurred By Body Part':'Incurred By Coverage Type'}</div><div class="rp-chart-wrap"><canvas id="rc-${id}-breakdown"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">${id==='wc'?'Incurred By Cause of Loss':'Claims by Day of Week'}</div><div class="rp-chart-wrap"><canvas id="rc-${id}-extra"></canvas></div></div>
      </div>
    </div>
    <div class="rp-ft"><div class="rp-ft-logo">Vantage</div><div class="rp-ft-txt">${ft}</div><div class="rp-ft-pg">Page ${pg} of 5</div></div>
  </div>`;
}

function buildDetails(d,ft){
  const fields=['Claim Number','Claim Status','Claimant','Date of Loss','Date Reported','Reporting Lag','Day of Week','Litigated','Coverage Type','Policy','Description','Total Paid','Total Reserves','Total Incurred'];
  const keys=['num','st','cl','dol','rep','lag','dow','lit','cov','pol','desc','paid','res','inc'];
  let t=`<div class="rp"><div class="rp-hdr"><span class="rp-hdr-t">Stewardship Report</span><span class="rp-hdr-s">/ Claim Details</span></div><div class="rp-bdy"><div class="det-wrap"><table class="det-tbl"><thead><tr><th>Field</th>`;
  d.claims.forEach(c=>t+=`<th>${c.num}</th>`);
  t+=`</tr></thead><tbody>`;
  fields.forEach((f,fi)=>{
    t+=`<tr><td class="row-lbl">${f}</td>`;
    d.claims.forEach(c=>t+=`<td${fi>=11?' class="amt"':''}>${c[keys[fi]]||'–'}</td>`);
    t+=`</tr>`;
  });
  t+=`</tbody></table></div></div><div class="rp-ft"><div class="rp-ft-logo">Vantage</div><div class="rp-ft-txt">${ft}</div><div class="rp-ft-pg">Page 5 of 5</div></div></div>`;
  return t;
}

function buildAllCharts(d){
  mkC('rc-premium','bar',d.years,[ds_bar(d.premiums,'Premium'),ds_line(d.lossRatios,'Loss Ratio %')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-claims','bar',d.years,[ds_bar(d.closed,'Closed'),{...ds_bar(d.open,'Open'),backgroundColor:'rgba(212,168,67,.4)'}]);
  mkC('rc-severity','bar',d.sev.labels,[ds_bar(d.sev.amounts,'Amount'),ds_line(d.sev.counts,'Count',LINE)],{y1:true,ycb:v=>f$(v)});
  mkC('rc-incurred','bar',d.years,[ds_bar(d.incurred,'Incurred'),ds_line(d.reserves,'Reserves',LINE)],{y1:false,ycb:v=>f$(v)});
  // WC
  mkC('rc-wc-prem','bar',d.years,[ds_bar(d.wc.p,'Premium'),ds_line(d.wc.lr,'Loss Ratio %')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-wc-claims','bar',d.years,[ds_bar(d.wc.cl,'Closed'),{...ds_bar(d.wc.op,'Open'),backgroundColor:'rgba(212,168,67,.4)'}]);
  mkC('rc-wc-breakdown','bar',d.wc.body.map(b=>b.l),[ds_bar(d.wc.body.map(b=>b.a),'Amount'),ds_line(d.wc.body.map(b=>b.c),'Count')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-wc-extra','bar',d.wc.cause.map(c=>c.l),[ds_bar(d.wc.cause.map(c=>c.a),'Amount'),ds_line(d.wc.cause.map(c=>c.c),'Count')],{y1:true,ycb:v=>f$(v)});
  // CPP
  mkC('rc-cpp-prem','bar',d.years,[ds_bar(d.cpp.p,'Premium'),ds_line(d.cpp.lr,'Loss Ratio %')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-cpp-claims','bar',d.years,[ds_bar(d.cpp.cl,'Closed'),{...ds_bar(d.cpp.op,'Open'),backgroundColor:'rgba(212,168,67,.4)'}]);
  mkC('rc-cpp-breakdown','bar',d.cpp.cov.map(c=>c.l),[ds_bar(d.cpp.cov.map(c=>c.a),'Amount'),ds_line(d.cpp.cov.map(c=>c.c),'Count')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-cpp-extra','bar',DAYS,[ds_bar(d.cpp.dow,'Amount'),ds_line(d.cpp.dowC,'Count')],{y1:true,ycb:v=>f$(v)});
  // Auto
  mkC('rc-auto-prem','bar',d.years,[ds_bar(d.auto.p,'Premium'),ds_line(d.auto.lr,'Loss Ratio %')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-auto-claims','bar',d.years,[ds_bar(d.auto.cl,'Closed'),{...ds_bar(d.auto.op,'Open'),backgroundColor:'rgba(212,168,67,.4)'}]);
  mkC('rc-auto-breakdown','bar',d.auto.cov.map(c=>c.l),[ds_bar(d.auto.cov.map(c=>c.a),'Amount'),ds_line(d.auto.cov.map(c=>c.c),'Count')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-auto-extra','bar',DAYS,[ds_bar(d.auto.dow,'Amount'),ds_line(d.auto.dowC,'Count')],{y1:true,ycb:v=>f$(v)});
}

function showSection(name){
  document.querySelectorAll('.r-section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(s=>s.classList.remove('active'));
  const rsEl = document.getElementById('rs-'+name);
  if (rsEl) rsEl.classList.add('active');
  const snEl = document.getElementById('snav-'+name);
  if (snEl) snEl.classList.add('active');
  const am = document.getElementById('app-main') || document.getElementById('report-main-area');
  if (am) am.scrollTop=0;
}

// File input — real PDF extraction
document.getElementById('aup-file').addEventListener('change',e=>{
  const file=e.target.files[0];
  if(file) handleFileUpload(file);
  e.target.value='';
});

// Drag and drop — real PDF extraction
const adz=document.getElementById('aup-dz');
adz.addEventListener('dragover',e=>{e.preventDefault();adz.classList.add('drag');});
adz.addEventListener('dragleave',()=>adz.classList.remove('drag'));
adz.addEventListener('drop',e=>{
  e.preventDefault();adz.classList.remove('drag');
  const file=e.dataTransfer.files[0];
  if(file) handleFileUpload(file);
});

// ── Scroll fade-in observer ──
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}});
},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.why-cell,.how-step,.aud-card,.testimonial-featured,.testimonial-card,.showcase-frame,.hero-proof-item').forEach((el,i)=>{
  el.classList.add('fade-up');
  el.style.transitionDelay=(i%4)*0.07+'s';
  observer.observe(el);
});

</body>
</html></body>
</html>

function fileToBase64(file){
  return new Promise((res,rej)=>{
    const reader=new FileReader();
    reader.onload=()=>res(reader.result.split(',')[1]);
    reader.onerror=()=>rej(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

// ═══════════ EXTRACT DATA — calls local proxy server ═══════════
const EXTRACTION_PROMPT=`You are an expert insurance data analyst. The attached document is an insurance document — this may be a loss run, policy, stewardship report, certificate of insurance, or similar. Extract ALL data from it and return ONLY a single valid JSON object with no markdown, no explanation, nothing else.

Use this exact structure (use 0 for missing numbers, [] for missing arrays, empty string for missing strings):

{
  "insured": "name of insured company",
  "by": "prepared by name",
  "renewal": "renewal date string",
  "years": [array of integer years e.g. 2018,2019,2020,2021,2022],
  "totalPremium": number,
  "totalClaims": number,
  "lossRatio": number as percent e.g. 46.43,
  "premiums": [premium per year matching years],
  "lossRatios": [overall loss ratio percent per year],
  "closed": [closed claim count per year],
  "open": [open claim count per year],
  "incurred": [total incurred dollars per year],
  "reserves": [total reserves per year],
  "sev": {
    "labels": ["No Pay","<$5k","$5k-$10k","$10k-$20k","$20k-$50k","$50k-$100k",">$100k"],
    "amounts": [total incurred per bucket],
    "counts": [claim count per bucket]
  },
  "wc": {
    "p": [WC premium per year],
    "lr": [WC loss ratio percent per year],
    "claims": number, "inc": number, "ratio": number,
    "cl": [WC closed per year], "op": [WC open per year], "iby": [WC incurred per year],
    "avgC": number, "lag": number,
    "med": {"c": number, "a": number},
    "ind": {"c": number, "a": number},
    "body": [{"l":"body part","a":incurred,"c":count}],
    "cause": [{"l":"cause","a":incurred,"c":count}]
  },
  "cpp": {
    "p": [CPP premium per year], "lr": [CPP loss ratio per year],
    "claims": number, "inc": number, "ratio": number,
    "cl": [closed per year], "op": [open per year], "iby": [incurred per year],
    "avgC": number, "lag": number,
    "cov": [{"l":"coverage type","a":incurred,"c":count}],
    "dow": [incurred Sun-Sat 7 values], "dowC": [count Sun-Sat 7 values]
  },
  "auto": {
    "p": [Auto premium per year], "lr": [Auto loss ratio per year],
    "claims": number, "inc": number, "ratio": number,
    "cl": [closed per year], "op": [open per year], "iby": [incurred per year],
    "avgC": number, "lag": number,
    "cov": [{"l":"coverage type","a":incurred,"c":count}],
    "dow": [incurred Sun-Sat 7 values], "dowC": [count Sun-Sat 7 values]
  },
  "claims": [
    {"num":"claim number","st":"Open or Closed or Reserved","cl":"claimant","dol":"date of loss",
     "rep":"date reported","lag":"e.g. 2 day(s)","dow":"day of week","lit":"Yes or No",
     "cov":"coverage type","pol":"WC or CPP or Auto","desc":"description",
     "paid":"dollar string or dash","res":"dollar string or dash","inc":"dollar string or dash"}
  ]
}

If a policy line is absent set all its numbers to 0 and arrays to zeros matching years length.
Return ONLY the JSON object.`;

async function extractFromPDF(file){
  const base64=await fileToBase64(file);
  const mediaType=file.type||'application/pdf';

  const response=await fetch('/api/extract',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      model:'claude-sonnet-4-20250514',
      max_tokens:4096,
      messages:[{
        role:'user',
        content:[
          {type:'document',source:{type:'base64',media_type:mediaType,data:base64}},
          {type:'text',text:EXTRACTION_PROMPT}
        ]
      }]
    })
  });

  if(!response.ok){
    const err=await response.json().catch(()=>({}));
    throw new Error(err?.error?.message||`Server error ${response.status}`);
  }

  const result=await response.json();
  if(result.error) throw new Error(result.error.message||'Extraction failed');

  const raw=(result.content||[]).map(b=>b.text||'').join('').trim();
  const cleaned=raw.replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'').trim();
  const data=JSON.parse(cleaned);
  data.date=new Date().toLocaleDateString('en-US',{month:'numeric',day:'numeric',year:'numeric'});
  return data;
}

// ═══════════ LOADING UI ═══════════

function setLoadingState(step,sub,pct){
  document.getElementById('ald-step').textContent=step;
  document.getElementById('ald-sub').textContent=sub;
  document.getElementById('ald-fill').style.width=pct+'%';
}

// ═══════════ HANDLE FILE UPLOAD ═══════════
async function handleFileUpload(file){
  if(!file) return;
  const allowed=['application/pdf','image/png','image/jpeg','image/jpg','image/webp'];
  if(!allowed.includes(file.type)&&!file.name.match(/\.(pdf|png|jpg|jpeg|webp)$/i)){
    showUploadError('Please upload a PDF or image file.');
    return;
  }
  const prev=document.getElementById('upload-error');
  if(prev) prev.remove();

  document.getElementById('aup').style.display='none';
  document.getElementById('ald').style.display='flex';
  setLoadingState('Reading your document...','Connecting to Vantage server',10);

  try{
    await new Promise(r=>setTimeout(r,300));
    setLoadingState('Identifying document format...','Analyzing document structure',25);
    await new Promise(r=>setTimeout(r,300));
    setLoadingState('Extracting policy data...','Reading premiums, claims, and loss ratios',50);
    const data=await extractFromPDF(file);
    setLoadingState('Structuring claim records...','Organizing claims by policy line',80);
    await new Promise(r=>setTimeout(r,300));
    setLoadingState('Building Stewardship Report...','Generating charts and analysis',95);
    await new Promise(r=>setTimeout(r,200));
    setLoadingState('Finalizing...','Verification complete',100);
    await new Promise(r=>setTimeout(r,200));
    renderReport(data);
  } catch(err){
    document.getElementById('ald').style.display='none';
    document.getElementById('aup').style.display='flex';
    let msg=err.message||'Unknown error';
    if(msg.includes('Failed to fetch')||msg.includes('NetworkError')||msg.includes('ECONNREFUSED')){
      msg='Cannot reach the Vantage server. Make sure server.js is running:\n  node server.js';
    } else if(msg.includes('401')||msg.includes('invalid_api_key')){
      msg='Invalid API key. Restart server.js with a valid ANTHROPIC_API_KEY.';
    }
    showUploadError(msg);
  }
}

function showUploadError(msg){
  const prev=document.getElementById('upload-error');
  if(prev) prev.remove();
  const div=document.createElement('div');
  div.id='upload-error';
  div.style.cssText='margin-top:1rem;padding:.75rem 1rem;background:#fee2e2;border:1px solid #fca5a5;border-radius:8px;font-size:12px;color:#991b1b;font-family:var(--mono);line-height:1.55;white-space:pre-line;';
  div.textContent='⚠ '+msg;
  const target=document.querySelector('#aup > div:last-child > div') || document.getElementById('aup');
  target.appendChild(div);
}

function renderReport(data){
  Object.values(charts).forEach(c=>{try{c.destroy();}catch(e){}});
  document.getElementById('ald').style.display='none';
  document.getElementById('app-main').style.display='block';
  document.getElementById('app-sidebar').style.display='block';
  document.getElementById('abtn-new').style.display='';
  document.getElementById('abtn-pdf').style.display='';
  document.getElementById('app-bc').innerHTML=`<span>Reports</span><span style="margin:0 5px;color:#ccc;">›</span><strong>${data.insured}</strong>`;

  const footer=`Prepared on ${data.date} by ${data.by||'Vantage User'} using Vantage`;
  document.getElementById('rs-summary').innerHTML=buildSummary(data,footer);
  document.getElementById('rs-wc').innerHTML=buildPolicy('Workers\nCompensation',data.wc,data.years,'wc',footer,2);
  document.getElementById('rs-cpp').innerHTML=buildPolicy('Commercial Package\nPolicy (CPP)',data.cpp,data.years,'cpp',footer,3);
  document.getElementById('rs-auto').innerHTML=buildPolicy('Commercial\nAuto',data.auto,data.years,'auto',footer,4);
  document.getElementById('rs-details').innerHTML=buildDetails(data,footer);
  showSection('summary');
  requestAnimationFrame(()=>buildAllCharts(data));

  // Generate Loss Control Interview in background
  generateLossControlInterview(data);
}

function buildSummary(d,ft){
  const rc2=rc(d.lossRatio);
  return `<div class="rp">
    <div class="rp-hdr"><span class="rp-hdr-t">Stewardship Report</span><span class="rp-hdr-s">/ Claim Summary</span></div>
    <div class="rp-bdy">
      <div class="rp-metrics">
        <div class="rp-m"><div class="rp-m-lbl">Renewal date</div><div class="rp-m-val" style="font-size:13px;line-height:1.3;">${d.renewal}</div></div>
        <div class="rp-m"><div class="rp-m-lbl">Years of data</div><div class="rp-m-val">${d.years.length}</div></div>
        <div class="rp-m"><div class="rp-m-lbl">Total premium</div><div class="rp-m-val" style="font-size:14px;">${ff$(d.totalPremium)}</div></div>
        <div class="rp-m"><div class="rp-m-lbl">Total claims</div><div class="rp-m-val">${d.totalClaims}</div></div>
        <div class="rp-m"><div class="rp-m-lbl">Loss ratio</div><div class="rp-m-val ${rc2}">${d.lossRatio}%</div></div>
      </div>
      <div class="rp-policies">
        ${[['Workers Compensation',d.wc],['Commercial Package (CPP)',d.cpp],['Commercial Auto',d.auto]].map(([n,p])=>`
          <div class="rp-pc"><div class="rp-pc-name">${n}</div><div class="rp-pc-row">
            <div><div class="rp-pf-lbl">Premium</div><div class="rp-pf-val">${ff$(p.p.reduce((a,b)=>a+b,0))}</div></div>
            <div><div class="rp-pf-lbl">Claims</div><div class="rp-pf-val">${p.claims}</div></div>
            <div><div class="rp-pf-lbl">Loss ratio</div><span class="rp-badge ${rc(p.ratio)}">${p.ratio}%</span></div>
          </div></div>`).join('')}
      </div>
      <div class="rp-charts">
        <div class="rp-chart"><div class="rp-chart-lbl">Premium & Loss Ratio Trend</div><div class="rp-chart-wrap"><canvas id="rc-premium"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">Claim Count by Year</div><div class="rp-chart-wrap"><canvas id="rc-claims"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">Claim Severity</div><div class="rp-chart-wrap"><canvas id="rc-severity"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">Incurred & Reserves by Year</div><div class="rp-chart-wrap"><canvas id="rc-incurred"></canvas></div></div>
      </div>
    </div>
    <div class="rp-ft"><div class="rp-ft-logo">Vantage</div><div class="rp-ft-txt">${ft}</div><div class="rp-ft-pg">Page 1 of 5</div></div>
  </div>`;
}

function buildPolicy(name,p,years,id,ft,pg){
  return `<div class="rp">
    <div class="rp-hdr"><span class="rp-hdr-t">Stewardship Report</span><span class="rp-hdr-s">/ Claim Policy Analysis</span></div>
    <div class="rp-bdy">
      <div class="rp-pol-hdr">
        <div class="rp-pol-name">${name.replace('\n','<br>')}</div>
        <div class="rp-pol-m"><div class="rp-pol-m-lbl">Incurred loss</div><div class="rp-pol-m-val">${ff$(p.inc)}</div></div>
        <div class="rp-pol-m"><div class="rp-pol-m-lbl">Premium</div><div class="rp-pol-m-val">${ff$(p.p.reduce((a,b)=>a+b,0))}</div></div>
        <div class="rp-pol-m"><div class="rp-pol-m-lbl">Claims</div><div class="rp-pol-m-val">${p.claims}</div></div>
        <div class="rp-pol-m"><div class="rp-pol-m-lbl">Loss ratio</div><div class="rp-pol-m-val ${rc(p.ratio)}">${p.ratio}%</div></div>
      </div>
      <div class="rp-tables">
        <div class="rp-tbl">
          <div class="rp-tbl-hdr three"><span>Item</span><span>Occurrences</span><span>Total</span></div>
          ${(()=>{
            const rows=[
              ['Net Incurred Loss', p.netOcc!==undefined?p.netOcc:'–', ff$(p.inc)],
              ['Outstanding Reserves', '–', p.outstandingRes?ff$(p.outstandingRes):'–'],
              ['Paid', p.paidOcc!==undefined?p.paidOcc:'–', p.paid?ff$(p.paid):ff$(p.inc)],
              ['Closed Claims', p.claims, ff$(p.inc)],
              ...(p.med&&p.med.c?[['Medical Claims', p.med.c, ff$(p.med.a)]]:[]),
              ...(p.ind&&p.ind.c?[['Indemnity Claims', p.ind.c, ff$(p.ind.a)]]:[]),
              ['Avg. Claim Cost', '', ff$(p.avgC)],
              ['Avg. Lag Time (Days)', '', p.lag||'–'],
              ['Avg. Time to Close (Days)', '', p.avgClose||'–'],
            ];
            return rows.map(([l,o,v])=>`<div class="rp-tbl-row three"><span class="rp-tbl-lbl">${l}</span><span class="rp-tbl-val">${o}</span><span class="rp-tbl-val">${v}</span></div>`).join('');
          })()}
        </div>
        <div class="rp-tbl">
          <div class="rp-tbl-hdr three"><span>Injury Dynamics</span><span>Most Frequent</span><span>Avg / Severity</span></div>
          ${(()=>{
            const dyn=p.dyn||{};
            const rows=[
              ['Day of the Week', dyn.dayOfWeek||'–', '–'],
              ['City', dyn.city||'–', '–'],
              ['State', dyn.state||'–', '–'],
              ['Litigated', dyn.litigatedPct||'–', dyn.litigatedAmt||'–'],
              ['Non Litigated', dyn.nonLitigatedPct||'–', dyn.nonLitigatedAmt||'–'],
              ...(dyn.bodyPart?[['Body Part', dyn.bodyPart, '–']]:[]),
              ...(dyn.medicalOnlyPct?[['Medical Only', dyn.medicalOnlyPct, dyn.medicalOnlyAmt||'–']]:[]),
              ...(dyn.indemnityPct?[['Indemnity', dyn.indemnityPct, dyn.indemnityAmt||'–']]:[]),
            ];
            return rows.map(([l,m,v])=>`<div class="rp-tbl-row three"><span class="rp-tbl-lbl">${l}</span><span class="rp-tbl-val">${m}</span><span class="rp-tbl-val">${v}</span></div>`).join('');
          })()}
        </div>
      </div>
      <div class="rp-charts">
        <div class="rp-chart"><div class="rp-chart-lbl">Premium & Loss Ratio Trend</div><div class="rp-chart-wrap"><canvas id="rc-${id}-prem"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">Claim Count by Year</div><div class="rp-chart-wrap"><canvas id="rc-${id}-claims"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">${id==='wc'?'Incurred By Body Part':'Incurred By Coverage Type'}</div><div class="rp-chart-wrap"><canvas id="rc-${id}-breakdown"></canvas></div></div>
        <div class="rp-chart"><div class="rp-chart-lbl">${id==='wc'?'Incurred By Cause of Loss':'Claims by Day of Week'}</div><div class="rp-chart-wrap"><canvas id="rc-${id}-extra"></canvas></div></div>
      </div>
    </div>
    <div class="rp-ft"><div class="rp-ft-logo">Vantage</div><div class="rp-ft-txt">${ft}</div><div class="rp-ft-pg">Page ${pg} of 5</div></div>
  </div>`;
}

function buildDetails(d,ft){
  const fields=['Claim Number','Claim Status','Claimant','Date of Loss','Date Reported','Reporting Lag','Day of Week','Litigated','Coverage Type','Policy','Description','Total Paid','Total Reserves','Total Incurred'];
  const keys=['num','st','cl','dol','rep','lag','dow','lit','cov','pol','desc','paid','res','inc'];
  let t=`<div class="rp"><div class="rp-hdr"><span class="rp-hdr-t">Stewardship Report</span><span class="rp-hdr-s">/ Claim Details</span></div><div class="rp-bdy"><div class="det-wrap"><table class="det-tbl"><thead><tr><th>Field</th>`;
  d.claims.forEach(c=>t+=`<th>${c.num}</th>`);
  t+=`</tr></thead><tbody>`;
  fields.forEach((f,fi)=>{
    t+=`<tr><td class="row-lbl">${f}</td>`;
    d.claims.forEach(c=>t+=`<td${fi>=11?' class="amt"':''}>${c[keys[fi]]||'–'}</td>`);
    t+=`</tr>`;
  });
  t+=`</tbody></table></div></div><div class="rp-ft"><div class="rp-ft-logo">Vantage</div><div class="rp-ft-txt">${ft}</div><div class="rp-ft-pg">Page 5 of 5</div></div></div>`;
  return t;
}

function buildAllCharts(d){
  mkC('rc-premium','bar',d.years,[ds_bar(d.premiums,'Premium'),ds_line(d.lossRatios,'Loss Ratio %')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-claims','bar',d.years,[ds_bar(d.closed,'Closed'),{...ds_bar(d.open,'Open'),backgroundColor:'rgba(212,168,67,.4)'}]);
  mkC('rc-severity','bar',d.sev.labels,[ds_bar(d.sev.amounts,'Amount'),ds_line(d.sev.counts,'Count',LINE)],{y1:true,ycb:v=>f$(v)});
  mkC('rc-incurred','bar',d.years,[ds_bar(d.incurred,'Incurred'),ds_line(d.reserves,'Reserves',LINE)],{y1:false,ycb:v=>f$(v)});
  // WC
  mkC('rc-wc-prem','bar',d.years,[ds_bar(d.wc.p,'Premium'),ds_line(d.wc.lr,'Loss Ratio %')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-wc-claims','bar',d.years,[ds_bar(d.wc.cl,'Closed'),{...ds_bar(d.wc.op,'Open'),backgroundColor:'rgba(212,168,67,.4)'}]);
  mkC('rc-wc-breakdown','bar',d.wc.body.map(b=>b.l),[ds_bar(d.wc.body.map(b=>b.a),'Amount'),ds_line(d.wc.body.map(b=>b.c),'Count')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-wc-extra','bar',d.wc.cause.map(c=>c.l),[ds_bar(d.wc.cause.map(c=>c.a),'Amount'),ds_line(d.wc.cause.map(c=>c.c),'Count')],{y1:true,ycb:v=>f$(v)});
  // CPP
  mkC('rc-cpp-prem','bar',d.years,[ds_bar(d.cpp.p,'Premium'),ds_line(d.cpp.lr,'Loss Ratio %')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-cpp-claims','bar',d.years,[ds_bar(d.cpp.cl,'Closed'),{...ds_bar(d.cpp.op,'Open'),backgroundColor:'rgba(212,168,67,.4)'}]);
  mkC('rc-cpp-breakdown','bar',d.cpp.cov.map(c=>c.l),[ds_bar(d.cpp.cov.map(c=>c.a),'Amount'),ds_line(d.cpp.cov.map(c=>c.c),'Count')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-cpp-extra','bar',DAYS,[ds_bar(d.cpp.dow,'Amount'),ds_line(d.cpp.dowC,'Count')],{y1:true,ycb:v=>f$(v)});
  // Auto
  mkC('rc-auto-prem','bar',d.years,[ds_bar(d.auto.p,'Premium'),ds_line(d.auto.lr,'Loss Ratio %')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-auto-claims','bar',d.years,[ds_bar(d.auto.cl,'Closed'),{...ds_bar(d.auto.op,'Open'),backgroundColor:'rgba(212,168,67,.4)'}]);
  mkC('rc-auto-breakdown','bar',d.auto.cov.map(c=>c.l),[ds_bar(d.auto.cov.map(c=>c.a),'Amount'),ds_line(d.auto.cov.map(c=>c.c),'Count')],{y1:true,ycb:v=>f$(v)});
  mkC('rc-auto-extra','bar',DAYS,[ds_bar(d.auto.dow,'Amount'),ds_line(d.auto.dowC,'Count')],{y1:true,ycb:v=>f$(v)});
}

function showSection(name){
  document.querySelectorAll('.r-section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.sb-item').forEach(s=>s.classList.remove('active'));
  const rsEl = document.getElementById('rs-'+name);
  if (rsEl) rsEl.classList.add('active');
  const snEl = document.getElementById('snav-'+name);
  if (snEl) snEl.classList.add('active');
  const am = document.getElementById('app-main') || document.getElementById('report-main-area');
  if (am) am.scrollTop=0;
}

// ═══════════════════════════════════════════
// REPORT SECTION NAVIGATION
// ═══════════════════════════════════════════
function showSection(name) {
  document.querySelectorAll('.r-section').forEach(s => s.classList.remove('active'));
  ['summary','wc','cpp','auto','details','interview'].forEach(n => {
    const el = document.getElementById('snav-' + n);
    if (el) el.classList.remove('active');
  });
  const section = document.getElementById('rs-' + name);
  if (section) section.classList.add('active');
  const nav = document.getElementById('snav-' + name);
  if (nav) nav.classList.add('active');
  const area = document.getElementById('report-main-area');
  if (area) area.scrollTop = 0;
}

// ═══════════════════════════════════════════
// LOSS CONTROL INTERVIEW GENERATOR
// ═══════════════════════════════════════════

// Full benchmark category library extracted from the Benchmark Audit Tool
const BENCHMARK_CATEGORIES = {
  'Employee Risk': [
    'Safety Management System','Record keeping (OSHA 300 Log)','OSHA recordables - last 12 months',
    'Employee injuries (non-recordable) - last 12 months','Accident investigation and corrective actions',
    'Return to work policy','Occupational medicine provider/clinic','Employee benefits',
    'Workers compensation coverage','Agency audits','Safety programs','Employee training',
    'Hazard Communication','Hot Work','Electrical safety','Control of Hazardous Energy (LOTO)',
    'Confined Space','PPE program','Respiratory Protection','Hearing Conservation',
    'Vehicle Operations','Contractor Safety','Incident Reporting and Investigation',
    'Substance Abuse policy','Fall Protection','Trenching and Shoring','Preplacement Physical'
  ],
  '1st Party (Assets)': [
    'Building Construction type','Roof Construction and age','Fire Protection systems',
    'Fixed system inspected and maintained','Fire extinguishers inspected and maintained',
    'Alarms - central station monitoring','Electrical - arc flash analysis',
    'Electrical - IR Scan','Electrical maintenance program','Disaster Recovery Plan',
    'Business continuity plan','Natural hazards response plan',
    'Security - perimeter','Security - internal controls','Building valuation accuracy',
    'Equipment valuation accuracy','Power backup systems','Vacant buildings'
  ],
  'Contractual Risk': [
    'Copy of executed contracts on file','Written contracts - signature required',
    'Hold harmless and indemnification clauses','Additional insured status on subcontractors',
    'Insurance requirements specified in contracts','Certificate of insurance tracking',
    'Waiver of subrogation requirements','Subcontractors insurance primary and noncontributory',
    'Legal counsel contract review','COI suspense tracking system'
  ],
  'Domestic Liabilities (3rd Party)': [
    'Facility maintenance program','Products liability quality control',
    'Product tracking procedures','Recall procedure','Product warnings and labeling',
    'Professional liability exposure','Training and certification procedures'
  ],
  'Crime': [
    'Inventory management controls','Background check procedures','Video surveillance',
    'Drug and Alcohol policy','Fund transfer authority and controls',
    'Financial audits','Dual control procedures'
  ],
  'Cyber / Privacy / Data Breach': [
    'Security awareness training','Security audits','IT policy documentation',
    'Multi-factor authentication','Server or Cloud infrastructure',
    'Data backup policy and procedures','Intrusion detection systems'
  ],
  'Inland Marine': [
    'Mobile equipment inventory','Valuation of equipment','Equipment tracking',
    'Maintenance program for equipment','Contractor equipment (rental tools)',
    'Cargo coverage','Transit and cargo insurance'
  ],
  'International': [
    'Foreign workers compensation','Countries traveled to','Employee classification abroad',
    'Duration of foreign travel','Facilities overseas','Rental cars in foreign countries'
  ]
};

async function generateLossControlInterview(data) {
  const el = document.getElementById('rs-interview');
  if (!el) return;

  // Show loading state
  el.innerHTML = `
    <div class="rp">
      <div class="rp-hdr">
        <span class="rp-hdr-t">Loss Control Interview</span>
        <span class="rp-hdr-sep">·</span>
        <span class="rp-hdr-s">Generating tailored questions...</span>
      </div>
      <div class="lci-loading">
        <div class="lci-loading-ring"></div>
        <div class="lci-loading-t">Analyzing risk profile · Building interview questions</div>
      </div>
    </div>`;

  // Build context summary from report data
  const wcRatio  = data.wc?.ratio  || 0;
  const cppRatio = data.cpp?.ratio || 0;
  const autoRatio= data.auto?.ratio|| 0;
  const worstLine = wcRatio >= cppRatio && wcRatio >= autoRatio ? 'Workers Compensation'
    : cppRatio >= autoRatio ? 'Commercial Package (CPP)' : 'Commercial Auto';

  const claimContext = [];
  if (data.wc?.claims > 0)   claimContext.push(`Workers Comp: ${data.wc.claims} claims, ${wcRatio}% loss ratio`);
  if (data.cpp?.claims > 0)  claimContext.push(`CPP: ${data.cpp.claims} claims, ${cppRatio}% loss ratio`);
  if (data.auto?.claims > 0) claimContext.push(`Auto: ${data.auto.claims} claims, ${autoRatio}% loss ratio`);

  const topCauses = [];
  if (data.wc?.cause?.length)  topCauses.push(...data.wc.cause.slice(0,3).map(c=>`WC - ${c.l}`));
  if (data.cpp?.cov?.length)   topCauses.push(...data.cpp.cov.slice(0,2).map(c=>`CPP - ${c.l}`));
  if (data.auto?.cov?.length)  topCauses.push(...data.auto.cov.slice(0,2).map(c=>`Auto - ${c.l}`));

  const prompt = `You are a senior commercial insurance risk analyst preparing a loss control interview for a producer about to meet with their insured.

INSURED PROFILE:
- Company: ${data.insured || 'Unknown'}
- Industry: ${data.industry || 'Not specified'}
- Total premium: ${ff$(data.totalPremium)}
- Total claims: ${data.totalClaims}
- Overall loss ratio: ${data.lossRatio}%
- Worst performing line: ${worstLine}
- Claim detail by line: ${claimContext.join('; ') || 'No claim detail'}
- Top loss causes/coverages: ${topCauses.join(', ') || 'Not available'}
- Years of data: ${(data.years||[]).join(', ')}

BENCHMARK AUDIT CATEGORIES AVAILABLE:
${Object.entries(BENCHMARK_CATEGORIES).map(([cat, items]) => `${cat}: ${items.slice(0,8).join(', ')}`).join('\n')}

TASK: Generate 10-14 pointed, specific loss control interview questions the agent should ask this insured. 

REQUIREMENTS:
1. Select categories MOST RELEVANT to this specific industry and their actual claim patterns
2. Prioritize questions about their worst-performing lines first
3. Make questions specific to their industry — use industry language (e.g., for HVAC: "hot work permits", for trucking: "driver MVR program", for roofing: "fall protection program")
4. Flag 2-3 questions as HIGH PRIORITY based on their worst claims
5. Include a brief "why this matters" note for each question (1 sentence)
6. Do NOT ask questions irrelevant to their industry (e.g., don't ask about Clinical Trials for a trucking company)

Return ONLY valid JSON in this exact format, no markdown, no explanation:
{
  "insured": "${data.insured || 'Insured'}",
  "industry": "${data.industry || 'General Commercial'}",
  "generated_date": "${new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}",
  "sections": [
    {
      "category": "Category Name",
      "questions": [
        {
          "q": "The full question text",
          "why": "One sentence explaining why this matters for this account",
          "priority": true
        }
      ]
    }
  ]
}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(()=>({}));
      throw new Error(err?.error?.message || `API error ${response.status}`);
    }

    const result = await response.json();
    const raw = (result.content||[]).map(b=>b.text||'').join('').trim();
    const clean = raw.replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'').trim();
    const interview = JSON.parse(clean);

    renderInterviewSection(interview, data);

    // Show the green dot badge on the nav item
    const badge = document.getElementById('interview-badge');
    if (badge) badge.style.display = 'block';

  } catch(err) {
    console.error('Interview generation error:', err);
    el.innerHTML = `
      <div class="rp">
        <div class="rp-hdr">
          <span class="rp-hdr-t">Loss Control Interview</span>
        </div>
        <div class="lci-loading">
          <div class="lci-loading-t" style="color:rgba(255,255,255,.25);">Unable to generate questions — check API connection</div>
        </div>
      </div>`;
  }
}

function renderInterviewSection(interview, data) {
  const el = document.getElementById('rs-interview');
  if (!el) return;

  const totalQs = interview.sections.reduce((s,c)=>s+c.questions.length,0);
  const priorityQs = interview.sections.reduce((s,c)=>s+c.questions.filter(q=>q.priority).length,0);

  const sectionsHTML = interview.sections.map(section => {
    const qsHTML = section.questions.map((q, i) => `
      <div class="lci-q ${q.priority ? 'priority' : ''}">
        <div class="lci-q-num">${q.priority ? '⚑' : '○'}</div>
        <div class="lci-q-body">
          <div class="lci-q-text">${q.q}</div>
          <div class="lci-q-why">${q.why}</div>
          <div class="lci-notes">Notes: ___________________________________________</div>
        </div>
      </div>`).join('');

    return `
      <div class="lci-category">
        <div class="lci-category-hdr">
          <span class="lci-category-name">${section.category}</span>
          <div class="lci-category-line"></div>
          <span class="lci-category-name">${section.questions.length} question${section.questions.length!==1?'s':''}</span>
        </div>
        ${qsHTML}
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="rp" style="margin-bottom:1.5rem;">
      <div class="rp-hdr">
        <span class="rp-hdr-t">Loss Control Interview</span>
        <span class="rp-hdr-sep">·</span>
        <span class="rp-hdr-s">${interview.insured}</span>
      </div>
      <div class="rp-bdy">
        <!-- Header strip -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.06);margin-bottom:1.5rem;">
          <div style="background:#1A2233;padding:.875rem 1rem;">
            <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.28);margin-bottom:4px;">Industry</div>
            <div style="font-size:13px;font-weight:500;color:rgba(255,255,255,.8);">${interview.industry || data.industry || 'General Commercial'}</div>
          </div>
          <div style="background:#1A2233;padding:.875rem 1rem;">
            <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.28);margin-bottom:4px;">Total questions</div>
            <div style="font-family:var(--display);font-size:1.4rem;font-weight:500;color:rgba(255,255,255,.9);letter-spacing:-.02em;">${totalQs}</div>
          </div>
          <div style="background:#1A2233;padding:.875rem 1rem;">
            <div style="font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.28);margin-bottom:4px;">Priority items</div>
            <div style="font-family:var(--display);font-size:1.4rem;font-weight:500;color:rgba(239,68,68,.8);letter-spacing:-.02em;">${priorityQs}</div>
          </div>
        </div>

        <!-- Legend -->
        <div style="display:flex;align-items:center;gap:1.5rem;margin-bottom:1.5rem;padding:.65rem 1rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);">
          <div style="display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10px;color:rgba(255,255,255,.35);">
            <span style="color:rgba(239,68,68,.6);font-size:12px;">⚑</span> Priority — ask first, dig deeper
          </div>
          <div style="display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10px;color:rgba(255,255,255,.35);">
            <span>○</span> Standard interview question
          </div>
        </div>

        ${sectionsHTML}

        <!-- Footer note -->
        <div style="margin-top:1.5rem;padding:1rem;border:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02);">
          <div style="font-family:var(--mono);font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.25);margin-bottom:.5rem;">About these questions</div>
          <div style="font-size:12px;color:rgba(255,255,255,.35);line-height:1.65;font-weight:300;">
            These questions were generated by Vantage AI based on this account's specific industry, claim patterns, and loss ratios. Priority items (⚑) were selected based on the worst-performing lines in this risk profile. Generated ${interview.generated_date}.
          </div>
        </div>
      </div>
      <div class="rp-ft">
        <div class="rp-ft-logo">Vantage</div>
        <div class="rp-ft-txt">Loss Control Interview · ${interview.insured}</div>
        <div class="rp-ft-pg">Confidential</div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════
// FILE DROP / INPUT WIRING
// ═══════════════════════════════════════════
const dropZone = document.getElementById('drop-zone');
if (dropZone) {
  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag');
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  });
}

const fileInput = document.getElementById('file-input');
if (fileInput) {
  fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) handleFileUpload(file);
    e.target.value = '';
  });
}

// ═══════════════════════════════════════════
// INIT — check for existing session
// ═══════════════════════════════════════════

// ═══════════════════════════════════════════
// INIT — check for existing session
// ═══════════════════════════════════════════
if (loadSession()) { {
  showPage('app');
} else {
  showPage('landing');
}
</script>
</body>
</html>