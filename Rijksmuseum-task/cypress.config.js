const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: "https://www.rijksmuseum.nl",
    env: {
      API_KEY: process.env.API_KEY,
      CULTURE: process.env.CULTURE || "en",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
