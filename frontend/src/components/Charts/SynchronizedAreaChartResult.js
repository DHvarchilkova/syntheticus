import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
    {"name": " ?", "real": 5.025125628140704, "synthetic": 10.5},
    {"name": " Federal-gov", "real": 5.527638190954774, "synthetic": 12.5},
    {"name": " Local-gov", "real": 6.030150753768844, "synthetic": 12.5},
    {"name": " Private", "real": 68.34170854271356, "synthetic": 15.0},
    {"name": " Self-emp-inc", "real": 3.015075376884422, "synthetic": 19.5},
    {"name": " Self-emp-not-inc", "real": 7.537688442211055, "synthetic": 17.0},
    {"name": " State-gov", "real": 4.522613065326634, "synthetic": 13.0}];

export default class SynchronizedAreaChartResult extends PureComponent {
    render() {
        return (
            <div>
        <h4>A demo of synchronized AreaCharts</h4>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="real" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <p>Maybe some other content</p>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="synthetic" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
        )
    }
}