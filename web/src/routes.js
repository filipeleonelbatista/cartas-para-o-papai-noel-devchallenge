import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CreateLetter from './pages/CreateLetter';
import List from './pages/List';
import Result from './pages/Result';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" exact component={CreateLetter} />
                <Route path="/list" exact component={List} />
                <Route path="/result" exact component={Result} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;