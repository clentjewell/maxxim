import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
const chrome = await launch({ chromePath: '/opt/pw-browsers/chromium', chromeFlags: ['--headless','--no-sandbox','--disable-gpu'] });
const r = await lighthouse('http://localhost:4325/', { port: chrome.port, output:'json', logLevel:'error', onlyCategories:['accessibility'], formFactor:'desktop', screenEmulation:{disabled:true} });
const a = r.lhr.audits['color-contrast'];
console.log('score:', a.score);
(a.details?.items||[]).forEach(it => console.log(' •', (it.node?.snippet||'').slice(0,180), '\n    ', it.node?.explanation||''));
