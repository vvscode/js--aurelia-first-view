var aurelia = require('aurelia-cli');

aurelia.command('bundle', {
  js: {
    "wwwroot/appbundle": {
      modules: [
        "app",
        "main",
        "about/**/*.js",
        "movies/**/*.js",
        "resources/**/*.js",
        "aurelia-bootstrapper",
        "aurelia-framework",
        "aurelia-router",
        "aurelia-http-client",
        "aurelia-validation"
      ],
      options: {
        inject: true
      }
    }
  },
  template: {
    "wwwroot/appbundle": {
      pattern: "./**/*.html",
      options: {

      }
    }
  }
});
