import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

export default function routes () {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ Dashboard } />
                <Route path='/wizard' component={ Wizard } />
            </Switch>
        </div>
    )
}