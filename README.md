# Install
`meteor add reactrouter:react-router`

# Usage
You use `ReactRouter` the same way you would use `require('react-router')`.<br />
You also have access to ReactRouter.history the same way you would use require('history') because they go hand in hand.<br />
Read the [react-router documentation](https://github.com/rackt/react-router/tree/master/docs) for more informations.

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
const {Router, Route, IndexRoute, browserHistory} = ReactRouter;

Meteor.startup(function() {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
  
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/" component={HomePage} />
        <Route path="login" component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
        {/* ... */}
      </Route>
    </Router>
  ), root);
});
```

# Credits
Huge thank you to Michael Jackson / Ryan Florence for creating the react-router and Alex Garibay for the original tutorial on how to use react-router with Meteor.
