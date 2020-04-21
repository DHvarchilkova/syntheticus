import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend
} from 'recharts';


const customizedTick = (props) => {
    const { payload, x, y, index } = props;
    const cos = Math.cos(-payload.angle * Math.PI / 180);
    const item = data[index];

    return (
  	<text x={x} y={y} textAnchor={cos >= 0 ? 'start' : 'end'} fill={item['A'] <= item.fullMark * 0.6 ? 'red' : 'black'} >
    	{payload.value}
    </text>
  );
};

const data = [
    {"name": " Other", "real": 12.025125628140704, "synthetic": 10.5, fullMark: 100},
    {"name": " Federal-gov", "real": 11.527638190954774, "synthetic": 12.5, fullMark: 100},
    {"name": " Local-gov", "real": 10.030150753768844, "synthetic": 12.5, fullMark: 100},
    {"name": " Private", "real": 13.34170854271356, "synthetic": 15.0, fullMark: 100},
    {"name": " Self-emp-inc", "real": 17.015075376884422, "synthetic": 19.5, fullMark: 100},
    {"name": " Self-emp-not-inc", "real": 17.537688442211055, "synthetic": 17.0, fullMark: 100},
    {"name": " State-gov", "real": 14.522613065326634, "synthetic": 13.0, fullMark: 100}];

export default class RadarChartResult extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width='99%' height={500}>
                <RadarChart cx={500} cy={250} outerRadius={200} width={300} height={300} data={data}>
                    <PolarGrid stroke={'#000000'}/>
                    <PolarAngleAxis dataKey="name" tick={customizedTick}/>
                    <PolarRadiusAxis />
                    <Radar name="real" dataKey="real" stroke="#8884d8" fill="#8884d8" fillOpacity={0.7} />
                    <Radar name="synthetic" dataKey="synthetic" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        )
    }
}