import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';
import Footer from '../Footer';
import BarChartResult from "./BarChartResult";
import HeatMapResult from "./HeatMapResult";
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
`;

const GraphContainer = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 126px;
    background-color: rgba(242, 242, 242, 1.0);
    margin-top: 5%;
`;

const TextContainer = styled.div`
    width: 20%;
    height: 50%;
    margin-top: 10%;
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
                            <SynchronizedAreaChartResult />
                            <TextContainer>
                                <TextByChart>Big data, data mining and artificial intelligence are revolutionizing the ways
                                we obtain value from data. Syntheticus uses state-of-the-art deep learning —
                                allowing users to unlock the power of synthetic data.
                                </TextByChart>
                            </TextContainer>
                        </GraphContainer>
                    </FirstContainer>
                    <SecondContainer>
                        <GraphContainer>
                            <BarChartResult />
                            <TextContainer>
                                <TextByChart>Big data, data mining and artificial intelligence are revolutionizing the ways
                                we obtain value from data. Syntheticus uses state-of-the-art deep learning —
                                allowing users to unlock the power of synthetic data.
                                </TextByChart>
                            </TextContainer>
                        </GraphContainer>
                    </SecondContainer>
                    <ThirdContainer>
                        <GraphContainer>
                            <HeatMapResult />
                            <TextContainer>
                                <TextByChart>Big data, data mining and artificial intelligence are revolutionizing the ways
                                we obtain value from data. Syntheticus uses state-of-the-art deep learning —
                                allowing users to unlock the power of synthetic data.
                                </TextByChart>
                            </TextContainer>
                        </GraphContainer>
                    </ThirdContainer>
                    <ForthContainer>
                        <GraphContainer>
                            <RadarChartResult />
                            <TextContainer>
                                <TextByChart>
                                    Big data, data mining and artificial intelligence are revolutionizing the ways
                                we obtain value from data. Syntheticus uses state-of-the-art deep learning —
                                allowing users to unlock the power of synthetic data.
                                </TextByChart>
                            </TextContainer>
                        </GraphContainer>
                    </ForthContainer>
                </ContentWrapper>
                <Footer />
            </div>
        )
    }
}

export default AllCharts;