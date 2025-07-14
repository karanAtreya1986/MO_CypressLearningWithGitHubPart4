const { defineConfig } = require("cypress");

module.exports = defineConfig({

  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results/mochawesome-report',
    overwrite:false,
    html: true,
    json: true,
  },
   e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config; // ✅ ensures the updated config plugins is passed back to Cypress
    }
  }
 
    // watchForFileChanges:true,
    // retries:{
    //   runMode:2,
    //   openMode:3
    // }
  // },
});
