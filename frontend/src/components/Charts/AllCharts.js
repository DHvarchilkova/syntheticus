import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';
import Footer from '../Footer';
import BarChartResult from "./BarChartResult";
import HeatMapResult from "./HeatMapResult";
import HeatMap2Result from "./HeatMap2Result";
import RadarChartResult from "./RadarChartResult";

import stock3 from '../../assets/stock3.jpg';


const ContentWrapper = styled.div`
    width: 100%;
    height: 96vh;
    overflow: auto;
`;

const GraphContainer = styled.div`
    width: 65%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-left: 120px;
    background-color: #ffffff;
`;

const GraphBox = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextByChart = styled.p`
    font-size: 1.2em;
    width: 50%;
`;

const SecondContainer = styled.div`
    width: 100%;
    height: 88vh;
    margin-top: 100px;
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
                    <SecondContainer>
                        <GraphContainer>
                            <GraphBox>
                                <BarChartResult />
                            </GraphBox>
                            <TextByChart>Similarities between your uploaded dataset(real) and the Syntheticus created dataset.</TextByChart>
                        </GraphContainer>
                    </SecondContainer>
                    <ThirdContainer>
                        <GraphContainer>
                            <GraphBox>
                                <RadarChartResult />
                            </GraphBox>
                            <TextByChart>Similarities between your uploaded dataset(real) and the Syntheticus created dataset.</TextByChart>
                        </GraphContainer>
                    </ThirdContainer>
                    <ForthContainer>
                        <GraphContainer>
                            <GraphBox>
                                <HeatMapResult />
                                <HeatMap2Result />
                                <TextByChart>Similarities between your uploaded dataset(real) and the Syntheticus created dataset.</TextByChart>
                            </GraphBox>
                        </GraphContainer>
                    </ForthContainer>
                </ContentWrapper>
                <Footer />
            </div>
        )
    }
}

export default AllCharts;