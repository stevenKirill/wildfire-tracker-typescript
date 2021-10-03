import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import ListPage from './pages/ListPage';
import MapPage from './pages/MapPage';

const Routes: React.FC = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact>
                    <MapPage/>
                </Route>
                <Route path="/list" exact>
                    <ListPage/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </React.Fragment>
    )
}

export default Routes
