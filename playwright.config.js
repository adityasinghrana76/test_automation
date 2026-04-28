const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  timeout: 120000,

  use: {
    baseURL: 'https://www.amazon.in',
    trace: 'on',
  },

  projects: [
    {
      name: 'Chrome on Windows',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
});