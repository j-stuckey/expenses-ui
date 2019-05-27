/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from '../components/LandingPage';
import Navigation from '../components/Navigation';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPage} />
        </Switch>
    </Router>
);

export default Routes;
