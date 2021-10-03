import React from 'react';
import { Switch, Route } from "react-router-dom";
import ListPage from './pages/ListPage';
import MapPage from './pages/MapPage';

const Routes: React.FC = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/map">
                    <MapPage/>
                </Route>
                <Route path="/list">
                    <ListPage/>
                </Route>
            </Switch>
        </React.Fragment>
    )
}

export default Routes
