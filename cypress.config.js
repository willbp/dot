const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
    },
  },
});
