# Usage
Install with: `meteor add reactrouter:react-router`.<br />
<br />
You use `ReactRouter` the same way you would use `require('react-router')` normally.
<br />
Read the [react-router documentation](http://rackt.github.io/react-router/tags/v1.0.0-beta3.html) for more informations.

# react-router/lib
You have access to the lib modules through `ReactRouter.lib`:

 - `ReactRouter.lib.BrowserHistory` (client only)
 - `ReactRouter.lib.HashHistory` (client only)
 - `ReactRouter.lib.Location` (server and client)
 - `ReactRouter.lib.MemoryHistory` (server and client)

# Example
```javascript
var {Router, Route} = ReactRouter;
var {history} = ReactRouter.lib.BrowserHistory;

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
Huge thank you to Michael Jackson / Ryan Florence for creating the react-router and Alex Garibay for the original tutorial on how to use react-router with Meteor.
