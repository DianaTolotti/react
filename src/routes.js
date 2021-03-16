import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import ScreenSearchLeads from './pages/ScreenSearchLeads'
import ScreenAddLeads from './pages/ScreenAddLeads'


 
function Routes(){
    return (
        <BrowserRouter>
            <Route component={ScreenSearchLeads} path="/" exact />
            <Route component={ScreenAddLeads} path="/add" />
            <Route component={ScreenAddLeads} path="/edit/:id" />
        </BrowserRouter>
    )
}
 
export default Routes;