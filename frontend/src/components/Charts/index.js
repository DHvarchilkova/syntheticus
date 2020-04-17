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

const data = [
    {"name": " ?", "real": 5.025125628140704, "synthetic": 10.5},
    {"name": " Federal-gov", "real": 5.527638190954774, "synthetic": 12.5},
    {"name": " Local-gov", "real": 6.030150753768844, "synthetic": 12.5},
    {"name": " Private", "real": 68.34170854271356, "synthetic": 15.0},
    {"name": " Self-emp-inc", "real": 3.015075376884422, "synthetic": 19.5},
    {"name": " Self-emp-not-inc", "real": 7.537688442211055, "synthetic": 17.0},
    {"name": " State-gov", "real": 4.522613065326634, "synthetic": 13.0}];


export default class Charts extends PureComponent {

    render() {
        return (
            <Body>
                <ChartContainer>
                    <ResponsiveContainer width='100%' height={300}>
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
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