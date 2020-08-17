import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListLeadPage from './pages/listleadpage';
import CreateLeadPage from './pages/createleadpage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={ListLeadPage} />
            <Route path="/add" component={CreateLeadPage} />
        </BrowserRouter>
    )
}

export default Routes;