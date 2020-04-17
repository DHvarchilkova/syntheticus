import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';
import Footer from '../Footer';
import { BlueButton } from '../../styles/GlobalButtons';
import BarChartResult from "./BarChartResult";
import HeatMapResult from "./HeatMapResult";
import RadarChartResult from "./RadarChartResult";
import SynchronizedAreaChartResult from "./SynchronizedAreaChartResult";

import chart from '../../assets/chart1.png';
import stock4 from '../../assets/stock4.jpg';
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
    background-color: red;
    background-size: cover;
    background-repeat: no-repeat;
`;

const SecondContainer = styled.div`
    width: 100%;
    height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: yellow;
`;

const ThirdContainer = styled.div`
    width: 100%;
    height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    background-size: cover;
    background-repeat: no-repeat;
`;

const ForthContainer = styled.div`
    width: 100%;
    height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: purple;
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
                        <SynchronizedAreaChartResult />
                    </FirstContainer>
                    <SecondContainer>
                        <BarChartResult />
                    </SecondContainer>
                    <ThirdContainer>
                        <HeatMapResult />
                    </ThirdContainer>
                    <ForthContainer>
                        <RadarChartResult />
                    </ForthContainer>
                </ContentWrapper>
                <Footer />
            </div>
        )
    }
}

export default AllCharts;