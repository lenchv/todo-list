import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage'
import { LoginPage } from '../LoginPage'

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ HomePage } />
                <Route path='/login' component={ LoginPage } />
            </Switch>
        </div>
    );
};
