import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Label, Tooltip, Legend, ResponsiveContainer }
    from 'recharts';


const data = [
    {"name": " Other", "real": 5.025125628140704, "synthetic": 10.5},
    {"name": " Federal-gov", "real": 5.527638190954774, "synthetic": 12.5},
    {"name": " Local-gov", "real": 6.030150753768844, "synthetic": 12.5},
    {"name": " Private", "real": 8.34170854271356, "synthetic": 15.0},
    {"name": " Self-emp-inc", "real": 13.015075376884422, "synthetic": 19.5},
    {"name": " Self-emp-not-inc", "real": 7.537688442211055, "synthetic": 17.0},
    {"name": " State-gov", "real": 4.522613065326634, "synthetic": 13.0}];

export default class BarChartResult extends PureComponent {
  /*  constructor (props) {
        super(props);
        this.state = {
            data: []
        };
    console.log('end of constructor');
    };

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            .then( (response) => {
                return response.json()
            })
            .then( (json) => {
                this.setState({data: json});
                console.log('end of componentDidMount');
            })
    };
*/
    render() {
        return (
            <ResponsiveContainer width='99%' height={400} >
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" label={{ value: "workplace", position: "insideBottomLeft", dy: 20}} />
                        <YAxis unit="%">
                            <Label value="" position="insideTopLeft" offset={10} />
                        </YAxis>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="real" fill="#8884d8" />
                        <Bar dataKey="synthetic" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}