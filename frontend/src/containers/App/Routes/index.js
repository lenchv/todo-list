import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../HomePage'
import NotFoundPage from '../../NotFoundPage';
import LoginPage from '../../LoginPage';
import RegisterPage from '../../RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default () => (
    <Switch>
        <PrivateRoute exact path='/' component={ HomePage } />
        <PublicRoute exact path='/login' component={ LoginPage } />
        <PublicRoute exact path='/register' component={ RegisterPage } />
        <Route exact path='/404' component={ NotFoundPage } />
        <Route component={ NotFoundPage } />
    </Switch>
);
