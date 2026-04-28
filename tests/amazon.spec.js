const { test } = require('@playwright/test');
const { chromium } = require('playwright');
const { AmazonPage } = require('../pages/amazonPage');

test.describe.parallel('Amazon Test Cases - LambdaTest', () => {

  test('Test Case 1 - iPhone', async () => {

    const browser = await chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
        browserName: "Chrome",
        browserVersion: "latest",
        "LT:Options": {
          platform: "Windows 11",
          build: "Amazon Build",
          name: "iPhone Test",
          user: process.env.LT_USERNAME,
          accessKey: process.env.LT_ACCESS_KEY,
          network: true,
          video: true,
          console: true
        }
      }))}`
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    const amazon = new AmazonPage(page);

    try {
      await amazon.goToAmazon();
      await amazon.searchProduct('iPhone');

      const productPage = await amazon.selectFirstProduct();

      const price = await amazon.getPrice(productPage);
      console.log('iPhone Price:', price);

      await amazon.addToCart(productPage);

      await page.waitForTimeout(2000);

    } catch (error) {
      console.log('Handled error in iPhone test:', error.message);
    }

    await browser.close();
  });

  test('Test Case 2 - Galaxy', async () => {

    const browser = await chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
        browserName: "Chrome",
        browserVersion: "latest",
        "LT:Options": {
          platform: "Windows 11",
          build: "Amazon Build",
          name: "Galaxy Test",
          user: process.env.LT_USERNAME,
          accessKey: process.env.LT_ACCESS_KEY,
          network: true,
          video: true,
          console: true
        }
      }))}`
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    const amazon = new AmazonPage(page);

    try {
      await amazon.goToAmazon();
      await amazon.searchProduct('Samsung Galaxy');

      const productPage = await amazon.selectFirstProduct();

      const price = await amazon.getPrice(productPage);
      console.log('Galaxy Price:', price);

      await amazon.addToCart(productPage);

      await page.waitForTimeout(2000);

    } catch (error) {
      console.log('Handled error in Galaxy test:', error.message);
    }

    await browser.close();
  });

});