# Usage
You use `ReactRouter` the same way you would use `require('react-router')` normally.

# libs
You have access to the lib modules through `ReactRouter.lib`:

 - `ReactRouter.lib.BrowserHistory` (client only)
 - `ReactRouter.lib.HashHistory` (client only)
 - `ReactRouter.lib.MemoryHistory` (server and client)

# Example
```javascript
var {Router, Route} = ReactRouter;
var history = ReactRouter.lib.BrowserHistory;

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body);
```

# Credits
Huge thank you to Alex Garibay for the original tutorial on how to use react-router with Meteor.
