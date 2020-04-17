import React, { useState, PureComponent } from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';


const data = [
    {"name": " ?", "real": 5.025125628140704, "synthetic": 10.5},
    {"name": " Federal-gov", "real": 5.527638190954774, "synthetic": 12.5},
    {"name": " Local-gov", "real": 6.030150753768844, "synthetic": 12.5},
    {"name": " Private", "real": 68.34170854271356, "synthetic": 15.0},
    {"name": " Self-emp-inc", "real": 3.015075376884422, "synthetic": 19.5},
    {"name": " Self-emp-not-inc", "real": 7.537688442211055, "synthetic": 17.0},
    {"name": " State-gov", "real": 4.522613065326634, "synthetic": 13.0}];

export default class HeatMapResult extends PureComponent {
    render() {
        return (
            <ResponsiveHeatMap
                data={data}
                keys={[
                    '?',
                    'Federal-gov',
                    'Local-gov',
                    'Private',
                    'Self-emp-inc',
                    'Self-emp-not-inc',
                    'State-gov'
                ]}
                margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
            forceSquare={true}
            axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: -6 }}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'workplace',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            cellOpacity={1}
            cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
            defs={[
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(0, 0, 0, 0.1)',
                    rotation: -45,
                    lineWidth: 4,
                    spacing: 7
                }
            ]}
            fill={[ { id: 'lines' } ]}
            animate={true}
            motionStiffness={80}
            motionDamping={9}
            hoverTarget="cell"
            cellHoverOthersOpacity={0.25}
            />
        )
    }
}