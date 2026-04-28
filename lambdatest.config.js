module.exports = {
  user: process.env.LT_USERNAME,
  accessKey: process.env.LT_ACCESS_KEY,

  gridURL: "@hub.lambdatest.com/wd/hub",

  capabilities: {
    browserName: "Chrome",
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 11",
      build: "Amazon Playwright Build",
      name: "Amazon Test",
      network: true,
      video: true,
      console: true
    }
  }
};