const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://glowing-umbrella-69gqr6p4667pf6rg-3000.app.github.dev/todos',
    specPattern: 'cypress/integration/todo.spec.js',
  },
});