# Install
`meteor add reactrouter:react-router`

# Usage
You use `ReactRouter` the same way you would use `require('react-router')` normally.<br />
Read the [react-router documentation](http://rackt.github.io/react-router/tags/v1.0.0-beta3.html) for more informations.

# Server-side rendering
You can use the [reactrouter:react-router-ssr package](https://atmospherejs.com/reactrouter/react-router-ssr) and have server-side rendering in one line:

```javascript
const {Route} = ReactRouter;

AppRoutes = (
  <Route path="/" component={App}>
    <Route path="/" component={HomePage} />
    <Route path="login" component={LoginPage} />
    <Route path="*" component={NotFoundPage} />
    {/* ... */}
  </Route>
);

ReactRouterSSR.Run(AppRoutes);
```

# Example
```javascript
const {Router, Route} = ReactRouter;
const {history} = ReactRouter.lib.BrowserHistory;

Meteor.startup(function() {
  React.render((
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/" component={HomePage} />
        <Route path="login" component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
        {/* ... */}
      </Route>
    </Router>
  ), document.body);
});
```

# Warning
This is using react-router 1.0 even though it is still in beta. The API is stable and working very well in production.

# react-router/lib
You have access to the lib modules through `ReactRouter.lib`:

 - `ReactRouter.lib.BrowserHistory` (client only)
 - `ReactRouter.lib.HashHistory` (client only)
 - `ReactRouter.lib.Location` (server and client)
 - `ReactRouter.lib.MemoryHistory` (server and client)

# Credits
Huge thank you to Michael Jackson / Ryan Florence for creating the react-router and Alex Garibay for the original tutorial on how to use react-router with Meteor.
