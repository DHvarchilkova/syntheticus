import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';
import Footer from '../Footer';
import {WhiteButton} from '../../styles/GlobalButtons/index';
import BarChartResult from "./BarChartResult";
import HeatMapResult from "./HeatMapResult";
import HeatMap2Result from "./HeatMap2Result";
import RadarChartResult from "./RadarChartResult";

import stock3 from '../../assets/stock3.jpg';
import download from '../../assets/download.svg';


const ContentWrapper = styled.div`
    width: 100%;
    height: 96vh;
    overflow: auto;
`;

const ResultsBox = styled.div`
    width: 19%;
    height: 40%;
    font-weight: bold;
    position: sticky;
    padding: 10px;
    top: 0;
    left: 0;
    margin: 1em 0;
    background-color: #ffffff;
    margin-top: -16%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const DownloadBox = styled.div`
    width: 100%;
    display: flex;
`;

const DownloadIcon = styled.img`
    width: 195px;
    height: 125px;
`;

const DownloadButton = styled(WhiteButton)`
    width: 210px;
    margin-top: 35px;
`;

const GraphContainer = styled.div`
    width: 65%;
    height: 75%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
    text-align: left;
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
                        <ResultsBox>
                            <TextByChart>This bar graph displays the similarities in the statistical distribution between
                                your uploaded dataset (purple) and the just created synthetic dataset (green).<br/>
                                A pair of bars of equal height signifies the distribution in both datasets is equal.</TextByChart>
                            <DownloadBox>
                                <DownloadIcon src={download} />
                                <DownloadButton>Download Report</DownloadButton>
                            </DownloadBox>
                        </ResultsBox>
                        <GraphContainer>
                            <GraphBox>
                                <BarChartResult />
                            </GraphBox>
                        </GraphContainer>
                    </SecondContainer>
                    <ThirdContainer>
                        <ResultsBox>
                            <TextByChart>This radar graph displays the similarities in the statistical distribution between
                                your uploaded dataset (purple) and the just created synthetic dataset (green).<br/>
                                More overlap between the two colors, means greater similarity between the original and the synthetical dataset.</TextByChart>
                            <DownloadBox>
                                <DownloadIcon src={download} />
                                <DownloadButton>Download Report</DownloadButton>
                            </DownloadBox>
                        </ResultsBox>
                        <GraphContainer>
                            <GraphBox>
                                <RadarChartResult />
                            </GraphBox>
                        </GraphContainer>
                    </ThirdContainer>
                    <ForthContainer>
                        <ResultsBox>
                            <TextByChart>These heat maps display the similarities in the statistical distribution between
                                your uploaded dataset (purple) and the just created synthetic dataset (green).<br/>
                                The closer the two patterns are to being identical, the greater the similarity in datasets is.</TextByChart>
                            <DownloadBox>
                                <DownloadIcon src={download} />
                                <DownloadButton>Download Report</DownloadButton>
                            </DownloadBox>
                        </ResultsBox>
                        <GraphContainer>
                            <GraphBox>
                                <HeatMapResult />
                                <HeatMap2Result />
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