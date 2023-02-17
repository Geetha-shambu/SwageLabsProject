const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "reporter": "mochawesome",

  "reporterOptions":{
                       "chats":true,
             "overwrite":false,
             "html":true,
             "json":true,
             "reportDir": "cypress/reports"
             
            },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
});
