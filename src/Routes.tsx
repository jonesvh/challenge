import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListLeadPage from '../src/pages/listleadpage';
import CreateLeadPage from '../src/pages/createleadpage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={ListLeadPage} />
            <Route path="/add" component={CreateLeadPage} />
        </BrowserRouter>
    )
}

export default Routes;