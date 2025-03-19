const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yi154t',
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    setupNodeEvents(on, config) {
    },
  },
});
