var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

var sentryURL = 'https://abd0806e51124044858d7e6b44ca17da@sentry.io/125101'

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'master',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install()

ReactDOM.render(routes, document.getElementById('app'));