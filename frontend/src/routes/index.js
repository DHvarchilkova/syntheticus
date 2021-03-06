import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LogIn from '../components/LogIn';
import Register from '../components/Register';
import EmailValidation from "../components/EmailValidation";
import Home2 from "../components/Home/index2";
import Upload from "../components/Upload";
import ChooseOptions from "../components/ChooseOptions";
import AllCharts from "../components/Charts/AllCharts";
import Processing from "../components/Processing";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/' component={Home2} />
                <Route exact path = '/login' component={LogIn} />
                <Route exact path = '/register' component={Register} />
                <Route exact path = '/register/complete' component={EmailValidation} />
                <Route exact path = '/datasets/upload' component={Upload} />
                <Route exact path = '/specify' component={ChooseOptions} />
                <Route exact path = '/processing' component={Processing} />
                <Route exact path = '/allcharts' component={AllCharts} />
            </Switch>
        </Router>
    )
}

export default Routes;