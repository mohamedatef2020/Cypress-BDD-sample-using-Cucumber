const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  defaultCommandTimeout: 10000,
  videosFolder: 'cypress/videos',
  viewportWidth: 1515,
  viewportHeight: 750,
  includeShadowDom: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl:
      'https://www.adp.com/resources/tools/calculators/states/new-york-salary-paycheck-calculator.aspx',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    excludeSpecPattern: '*.js',
  },
})
