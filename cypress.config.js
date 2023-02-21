const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://conduit-app.ksenijazlatic.com/",

    env: {
      "validUserName": "myUserName01",
      "validEmail": "myuser@gmail.com",
      "validPassword": "pass123",
      "apiUrl": "https://api.realworld.io"
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
