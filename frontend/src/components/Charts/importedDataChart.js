import React, {Component} from "react";

import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from "recharts";

class ResultsBarChart extends Component {
    constructor () {
        super(props);
        this.state = {
            data: []
        };
    console.log('end of constructor');
    };

    componentDidMount() {
        fetch("https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history/exports/json")
            .then( (response) => {
                return response.json()
            })
            .then( (json) => {
                this.setState({data: json});
                console.log('end of componentDidMount');
            })
    };

    render() {
        console.log('before return statement');
        return("test"
        )}
}

export default class ResultsBarChart;