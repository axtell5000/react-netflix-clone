import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// accepts user, path to go if correctly logged in, children and rest of props
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route 
      {...rest}
      render={() => {
        // render if user not correct, the intended component in the route (children)
        if (!user) {
          return children;
        }
        // if user correct, redirect to the logged in path - see App.js for workings
        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
// takes user, children and rest of props
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        // if correct user render children which in this case be Browse - see App.js for use
        if (user) {
          return children;
        }
        console.log(location, 'll');
        // if not correct user redirect to signin page, and add location property to state
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}