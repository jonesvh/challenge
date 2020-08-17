import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListLeadPage from '../src/Pages/ListLeadPage';
import CreateLeadPage from '../src/Pages/CreateLeadPage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={ListLeadPage} />
            <Route path="/add" component={CreateLeadPage} />
        </BrowserRouter>
    )
}

export default Routes;