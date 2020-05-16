const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://travelaloha.ryuhub.me');
  await page.waitFor(1000);
  await page.click('a[href="/login"] > button');
  await page.waitFor(1000);
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();