ReactRouter = require('react-router');

ReactRouter.lib = {
  MemoryHistory: require('react-router/lib/MemoryHistory'),
  Location: require('react-router/lib/Location')
};

if (Meteor.isClient) {
  ReactRouter.lib.BrowserHistory = require('react-router/lib/BrowserHistory');
  ReactRouter.lib.HashHistory = require('react-router/lib/HashHistory');
}
