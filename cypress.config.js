const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  
  e2e: {
    baseUrl: "https://conduit-app.ksenijazlatic.com/",

    env: {
      username: "myUserName01",
      password: "pass123",
      "validEmail": "myuser@gmail.com",
      "validPassword": "pass123",
      "apiUrl": "https://api.realworld.io"
    },
    retries: {
      runMode: 2,
      openMode: 0
    },
    
    setupNodeEvents(on, config) {

      const username = process.env.DB_USERNAME
      const password = process.env.PROCESS

      config.env = {username, password}
      return config
    },
  },
});
