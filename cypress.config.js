const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight:1024,
    viewportWidth:2080,
    baseUrl:"https://demo.nopcommerce.com",
    apiBaseUrl:"https://petstore3.swagger.io/api/v3/"
  },
});
