import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Label, Tooltip, Legend, ResponsiveContainer }
    from 'recharts';

import Body from '../Body';

const ChartContainer = styled.div`
    width: 100vw;
    height: 96vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default class TestChart extends PureComponent {
    constructor (props) {
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

    render() {
        return (
            <Body>
                <ChartContainer>
                    <ResponsiveContainer width='100%' height={300}>
                        <BarChart
                        width={500}
                        height={300}
                        data={this.data}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" label={{ value: "Workplace", position: "insideBottomLeft", dy: 20}} />
                            <YAxis unit="%">
                                <Label value="percentage" position="insideTopLeft" offset={10} />
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="real" fill="#8884d8" />
                            <Bar dataKey="synthetic" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </Body>
        );
    }
}