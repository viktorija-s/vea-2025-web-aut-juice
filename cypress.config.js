const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 5000,
    baseUrl: "http://localhost:3000",
  },
});
