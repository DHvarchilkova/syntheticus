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

const FirstContainer = styled.div`
    width: 100%;
    height: 96vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${stock3});
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 80px;
`;

const GraphContainer = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 120px;
    background-color: rgba(242, 242, 242, 0.8);
`;

const GraphBox = styled.div`
    width: 60%;
    height: 80%;
    display: flex;
    justify-content: space-between;
`;

const TextBox = styled.div`
    width: 30%;
    height: 50%;
`;

const TextByChart = styled.p`
    font-size: 24px;
`;

const SecondContainer = styled.div`
    width: 100%;
    height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${stock3});
    background-size: cover;
    background-repeat: no-repeat;
`;

const ThirdContainer = styled.div`
    width: 100%;
    height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${stock3});
    background-size: cover;
    background-repeat: no-repeat;
`;

const ForthContainer = styled.div`
    width: 100%;
    height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${stock3});
    background-size: cover;
    background-repeat: no-repeat;
`;


class AllCharts extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <ContentWrapper>
                    <FirstContainer>
                        <GraphContainer>
                            <GraphBox>
                                <SynchronizedAreaChartResult />
                            </GraphBox>
                            <TextBox>
                                <TextByChart>Big data, data mining and artificial intelligence are revolutionizing the ways
                                we obtain value from data. Syntheticus uses state-of-the-art deep learning —
                                allowing users to unlock the power of synthetic data.
                                </TextByChart>
                            </TextBox>
                        </GraphContainer>
                    </FirstContainer>
                    <SecondContainer>
                        <GraphContainer>
                            <GraphBox>
                                <BarChartResult />
                            </GraphBox>
                            <TextBox>
                                <TextByChart>Big data, data mining and artificial intelligence are revolutionizing the ways
                                we obtain value from data. Syntheticus uses state-of-the-art deep learning —
                                allowing users to unlock the power of synthetic data.
                                </TextByChart>
                            </TextBox>
                        </GraphContainer>
                    </SecondContainer>
                    <ThirdContainer>
                        <GraphContainer>
                            <GraphBox>
                                <HeatMapResult />
                                <HeatMap2Result />
                            </GraphBox>
                            <TextBox>
                                <TextByChart>Big data, data mining and artificial intelligence are revolutionizing the ways
                                we obtain value from data. Syntheticus uses state-of-the-art deep learning —
                                allowing users to unlock the power of synthetic data.
                                </TextByChart>
                            </TextBox>
                        </GraphContainer>
                    </ThirdContainer>
                    <ForthContainer>
                        <GraphContainer>
                            <GraphBox>
                                <RadarChartResult />
                            </GraphBox>
                            <TextBox>
                                <TextByChart>
                                    Big data, data mining and artificial intelligence are revolutionizing the ways
                                we obtain value from data. Syntheticus uses state-of-the-art deep learning —
                                allowing users to unlock the power of synthetic data.
                                </TextByChart>
                            </TextBox>
                        </GraphContainer>
                    </ForthContainer>
                </ContentWrapper>
                <Footer />
            </div>
        )
    }
}

export default AllCharts;