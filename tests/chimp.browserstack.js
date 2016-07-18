module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchWithPolling: false,
  sync: true,

  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
    coloredLogs: true,
    desiredCapabilities: {
      os: 'Windows',
      os_version: '10',
      resolution: '1024x768',
      'browserstack.local': 'true'
    },
    logLevel: 'silent',
    screenshotPath: 'screenshots',
    waitforTimeout: 5000,
    waitforInterval: 2500
  },

  // - - - - MOCHA  - - - -
  mocha: true,
  mochaTimeout: 60000,
  chai: true,
  path: './tests/features',
  format: 'dots',

  // - - - - Screenshots - - - -
  screenshotsOnError: true,
  screenshotsPath: './screenshots',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  saveScreenshotsToReport: false,

 // - - - - SELENIUM  - - - -
  browser: 'IE',
  version: '11',
  user: 'powershift1',
  key: 'CXjbyHsqx5cftpqRSjTk',
  host: 'hub.browserstack.com',
  port: 80,

  // - - - - PHANTOM  - - - -
  phantom_w: 1280,
  phantom_h: 1024
};
