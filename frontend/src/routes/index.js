import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../components/Home';
import MainHeader from '../components/MainHeader';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import EmailValidation from "../components/EmailValidation";
import Body from "../components/Body";
import Home2 from "../components/Home/index2";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/home' component={Home} />
                <Route exact path = '/home2' component={Home2} />
                <Route exact path = '/mainheader' component={MainHeader} />
                <Route exact path = '/login' component={LogIn} />
                <Route exact path = '/register' component={Register} />
                <Route exact path = '/verify' component={EmailValidation} />
                <Route exact path = '/body' component={Body} />
            </Switch>
        </Router>
    )
}

export default Routes;