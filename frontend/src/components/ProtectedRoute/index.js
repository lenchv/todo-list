import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, redirectTo, isResolved, ...rest }) => (
    <Route {...rest} render={props =>
        (isResolved)
            ? <Component {...props} />
            : <Redirect to={{
                pathname: redirectTo,
                state: { from: props.location }
              }} />
    } />
);
