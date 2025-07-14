const { defineConfig } = require("cypress");

module.exports = defineConfig({

   e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite:false,
    html: false,
    json: true,
  },
 
    // watchForFileChanges:true,
    // retries:{
    //   runMode:2,
    //   openMode:3
    // }
  // },
});
