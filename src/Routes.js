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
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from './config';

function Routes() {
    const isLoading = useSelector(state => state.authReducer.isLoading)

    return (
        <div>
            <Switch>
                <ProtectedRoute exact path="/home" component={Home} user={getToken()} />
                <Route exact path="/" component={Login} />

            </Switch>

        </div>
    )
}

export default Routes
