import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../components/Home';
import MainHeader from '../components/MainHeader';
import LogIn from '../components/LogIn';
import Register from '../components/Register';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/home' component={Home} />
                <Route exact path = '/mainheader' component={MainHeader} />
                <Route exact path = '/login' component={LogIn} />
                <Route exact path = '/register' component={Register} />
            </Switch>
        </Router>
    )
}

export default Routes;