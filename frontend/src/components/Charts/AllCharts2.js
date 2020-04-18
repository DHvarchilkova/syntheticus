import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';
import Footer from '../Footer';
import BarChartResult from "./BarChartResult";
import HeatMapResult from "./HeatMapResult";
import HeatMap2Result from "./HeatMap2Result";
import RadarChartResult from "./RadarChartResult";
import SynchronizedAreaChartResult from "./SynchronizedAreaChartResult";

import stock3 from '../../assets/stock3.jpg';

const ContentWrapper = styled.div`
    width: 100%;
    height: 96vh;
    overflow: auto;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 96vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${stock3});
    background-size: cover;
    background-repeat: no-repeat;
`;

const GraphContainer = styled.div`
    width: 100%;
    height: 780px;
    margin-top: 130px;
    padding-left: 130px;
    display: grid;
    grid-template-rows: 45px repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0;
    gap: 10px;
    background: none;
`;

const HeadlineBox = styled.div`
    width: 500px;
    height: 45px;
    background-color: rgba(242, 242, 242, 0.8);
    grid-column-start: 1;
    margin-left: 550px;
    font-size: 22px;
    text-align: center;
`;

const GraphBox1 = styled.div`
    width: 540px;
    height: 340px;
    background-color: rgba(242, 242, 242, 0.8);
    grid-row-start: 2;
`;

const GraphBox2 = styled.div`
    width: 540px;
    height: 340px;
    background-color: rgba(242, 242, 242, 0.8);
    grid-row-start: 2;
    display: flex;
    justify-content: center;
`;

const GraphBox3 = styled.div`
    width: 540px;
    height: 340px;
    background-color: rgba(242, 242, 242, 0.8);
    grid-row-start: 3;
`;

const GraphBox4 = styled.div`
    width: 540px;
    height: 340px;
    background-color: rgba(242, 242, 242, 0.8);
    grid-row-start: 3;
`;


class AllCharts2 extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <ContentWrapper>
                    <ContentContainer>
                        <GraphContainer>
                            <HeadlineBox>Original and Synthetic: similarities in 4 graphs</HeadlineBox>
                            <GraphBox1>
                                <BarChartResult />
                            </GraphBox1>
                            <GraphBox2>
                                <HeatMapResult/>
                                <HeatMap2Result/>
                            </GraphBox2>
                            <GraphBox3>
                                <SynchronizedAreaChartResult />
                            </GraphBox3>
                            <GraphBox4>
                                <RadarChartResult />
                            </GraphBox4>
                        </GraphContainer>
                    </ContentContainer>
                </ContentWrapper>
                <Footer />
            </div>
        )
    }
}

export default AllCharts2;