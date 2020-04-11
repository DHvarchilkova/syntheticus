import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../components/Home';
import Grow from '../components/Grow';
import LogIn from '../components/LogIn';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/home' component={Home} />
                <Route exact path = '/grow' component={Grow} />
                <Route exact path = '/login' component={LogIn} />
            </Switch>
        </Router>
    )
}

export default Routes;