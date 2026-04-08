const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
     video: true,
     videoCompression: false,
     videoUploadOnPasses: true,

    retries: {
      runMode: 2,   // GitHub Actions (CI)
      openMode: 0   // Local (modo interativo)
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
