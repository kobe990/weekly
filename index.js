'use strict'
var app = require('koa')()
var React = require('react');
var ReactDOMServer = require('react-dom/server');

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

app.use(function *() {
  this.body = ReactDOMServer.renderToString(<MyComponent />);
})
app.listen(3001)
