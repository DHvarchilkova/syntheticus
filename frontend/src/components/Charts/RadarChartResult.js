import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
    {"name": " ?", "real": 5.025125628140704, "synthetic": 10.5, fullMark: 20},
    {"name": " Federal-gov", "real": 5.527638190954774, "synthetic": 12.5, fullMark: 20},
    {"name": " Local-gov", "real": 6.030150753768844, "synthetic": 12.5, fullMark: 20},
    {"name": " Private", "real": 68.34170854271356, "synthetic": 15.0, fullMark: 20},
    {"name": " Self-emp-inc", "real": 3.015075376884422, "synthetic": 19.5, fullMark: 20},
    {"name": " Self-emp-not-inc", "real": 7.537688442211055, "synthetic": 17.0, fullMark: 20},
    {"name": " State-gov", "real": 4.522613065326634, "synthetic": 13.0, fullMark: 20}];

export default class RadarChartResult extends PureComponent {
    render() {
        return (
            <RadarChart cx={300} cy={250} outerRadius={100} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="real" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Linda" dataKey="synthetic" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4} />
      </RadarChart>
        )
    }
}