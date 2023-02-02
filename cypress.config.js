const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://reqres.in/api',
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: true,
      html: true,
      json: false
    }
  },
});
