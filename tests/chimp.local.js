module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchWithPolling: false,
  sync: true,

  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
    coloredLogs: true,
    logLevel: 'silent',
    screenshotPath: './screenshots',
    waitforTimeout: 500,
    waitforInterval: 250
  },

  // - - - - MOCHA  - - - -
  mocha: true,
  mochaTimeout: 5000,
  chai: true,
  path: './tests/features',
  format: 'dot',

 // - - - - SELENIUM  - - - -
  browser: 'phantomjs',
  platform: 'ANY',
  name: '',
  user: '',
  key: '',
  port: null,
  host: null,

  // - - - - PHANTOM  - - - -
  phantom_w: 1280,
  phantom_h: 1024
};
