'use strict'

var webSite = require('./logistics/index')
// dev or production
var env = "production"
var config = {
  "templatePath": "./templates",
  "staticPath": env === "dev" ? "static/src" : "static/dist/weekly/0.0.1"
}

webSite.run(config)
