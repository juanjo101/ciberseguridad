const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

  console.log("Navigating to http://localhost:5173/");
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  
  console.log("Waiting 2 seconds for rendering...");
  await page.waitForTimeout(2000);
  
  const canvasSize = await page.evaluate(() => {
    const canvas = document.getElementById('radarChart');
    if (!canvas) return null;
    return { width: canvas.width, height: canvas.height, offsetWidth: canvas.offsetWidth, offsetHeight: canvas.offsetHeight };
  });
  console.log("Canvas metrics:", canvasSize);
  
  const kpiClicks = await page.evaluate(() => {
    const cards = document.querySelectorAll('.kpi-card');
    return Array.from(cards).map(c => ({ text: c.innerText.substring(0,20), hasOnclick: !!c.onclick }));
  });
  console.log("KPI Cards found:", kpiClicks);
  
  console.log("Simulating click on first KPI card...");
  await page.click('.kpi-card');
  
  console.log("Waiting for document load...");
  await page.waitForTimeout(1000);
  
  const mainHTML = await page.evaluate(() => {
    return document.getElementById('document-view').innerHTML.substring(0, 100);
  });
  console.log("Document view after click:", mainHTML);
  
  await browser.close();
})();
