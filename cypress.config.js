const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Test dosyalarınızın bulunduğu pattern
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    // Testlerin çalışacağı baseUrl (isteğe bağlı)
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  // Test çalıştırma zaman aşımı süresi
  defaultCommandTimeout: 10000
})