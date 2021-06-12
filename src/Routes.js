import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"

function Routes() {


    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <ProtectedRoute exact path="/home" component={Home} />
            </Switch>

        </div>
    )
}

export default Routes
