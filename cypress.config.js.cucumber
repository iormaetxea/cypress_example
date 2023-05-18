const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  "video": false,
  env: {
    TAGS: 'not @ignore',
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/cucumber/**/*.{feature,features}',
    excludeSpecPattern: ['*.js'],
    chromeWebSecurity: false
  },
})