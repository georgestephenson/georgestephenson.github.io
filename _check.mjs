import puppeteer from 'puppeteer';
const b = await puppeteer.launch();
const p = await b.newPage();
for (const w of [420, 1440]) {
  await p.setViewport({width: w, height: 900});
  await p.goto('http://localhost:4000/software/2026/07/26/start-at-the-end/', {waitUntil: 'load'});
  const before = await p.$eval('.sidenote', e => getComputedStyle(e).display);
  await p.click('label.sidenote-ref');
  const after = await p.$eval('.sidenote', e => {
    const s = getComputedStyle(e); const r = e.getBoundingClientRect();
    return `${s.display} float=${s.float} w=${Math.round(r.width)} x=${Math.round(r.x)}`;
  });
  console.log(`${w}px: before=${before} | after click=${after}`);
}
await b.close();
