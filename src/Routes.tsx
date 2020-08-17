import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListLeadPage from '../src/pages/listLeadPage';
import CreateLeadPage from '../src/pages/createLeadPage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={ListLeadPage} />
            <Route path="/add" component={CreateLeadPage} />
        </BrowserRouter>
    )
}

export default Routes;