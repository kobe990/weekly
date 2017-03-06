'use strict'
var app = require('koa')()
var React = require('react');
// var ReactDOMServer = require('react-dom/server')
var ReactDOMServer = require('react-dom/server')
// var ReactApp = require('./ReactApp')
require('node-jsx').install({
  extension:'.jsx'
});
var ReactApp = React.createFactory(require("./ReactApp.jsx"))
app.use(function *() {
  // this.body = ReactDOMServer.renderToString(ReactApp())
  // this.body = "<div>dsfsdf</div>"
})
app.listen(3001)
