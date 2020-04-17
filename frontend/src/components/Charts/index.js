import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Body from '../Body';
import BarChartResult from "./BarChartResult";
import HeatMapResult from "./HeatMapResult";
import RadarChartResult from "./RadarChartResult";
import SynchronizedAreaChartResult from "./SynchronizedAreaChartResult";

const ChartContainer = styled.div`
    width: 100vw;
    height: 96vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class Charts extends PureComponent {

    render() {
        return (
            <Body>
                <ChartContainer>
                    <BarChartResult />
                    <RadarChartResult />
                    <HeatMapResult />
                    <SynchronizedAreaChartResult />
                </ChartContainer>
            </Body>
        );
    }
}