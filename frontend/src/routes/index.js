import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../components/Home';
import MainHeader from '../components/MainHeader';
import LogIn from '../components/LogIn';
import Register from '../components/Register';
import EmailValidation from "../components/EmailValidation";
import Body from "../components/Body";
import Home2 from "../components/Home/index2";
import Upload from "../components/Upload";
import ChooseOptions from "../components/ChooseOptions";
import Charts from "../components/Charts";
import TestChart from "../components/Charts/BarChartResult";
import AllCharts from "../components/Charts/AllCharts";
import AllCharts2 from "../components/Charts/AllCharts2";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/home' component={Home} />
                <Route exact path = '/' component={Home2} />
                <Route exact path = '/mainheader' component={MainHeader} />
                <Route exact path = '/login' component={LogIn} />
                <Route exact path = '/register' component={Register} />
                <Route exact path = '/register/complete' component={EmailValidation} />
                <Route exact path = '/body' component={Body} />
                <Route exact path = '/datasets/upload' component={Upload} />
                <Route exact path = '/specify' component={ChooseOptions} />
                <Route exact path = '/charts' component={Charts} />
                <Route exact path = '/testchart' component={TestChart} />
                <Route exact path = '/allcharts' component={AllCharts} />
                <Route exact path = '/allcharts2' component={AllCharts2} />
            </Switch>
        </Router>
    )
}

export default Routes;