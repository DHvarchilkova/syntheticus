import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import MainHeader from '../MainHeader';
import Footer from '../Footer';
import HomeExplainer from "../HomeExplainer";
import { BlueButton } from '../../styles/GlobalButtons';

import RadarChartResult from "../Charts/RadarChartResult";
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
    background: url(${stock4});
    background-size: cover;
    background-repeat: no-repeat;
`;

const MissionText = styled.div`
    width: 100%;
    display: flex;
`;

const MissionText1 = styled.p`
    margin-left: 126px;
    margin-top: 44vh;
    width: 25%;
    font-size: 24px;
    color: #ffffff;
    line-height: 1.5em;
`;

const MissionText2 = styled.p`
    margin-left: 723px;
    margin-top: 33vh;
    width: 25%;
    font-size: 24px;
    color: #ffffff;
    line-height: 1.5em;
`;

const SecondContainer = styled.div`
    width: 100%;
    height: 84vh;

`;

const ContentBox = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
`;

const ExampleGraphBox = styled.div`
    width: 50%;
    height: 53vh;
    margin-top: 14vh;
`;

const ExampleRightHalf = styled.div`
    width: 30%;
`;

const ExampleText = styled.p`
    line-height: 1.5em;
    font-size: 24px;
    margin-top: 20vh;
    background: -webkit-linear-gradient(#63c3ff, #8088fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const ButtonContainer = styled.div`
    margin-top: 6vh;
    margin-right: 20%;
`;

const BottomBar = styled.div`
    width: 100%;
    height: 3vh;
    margin-top: 55px;
    box-shadow: 0 0 15px 10px #8088fd;
    background: linear-gradient(270deg, #63c3ff, #8088fd, #82ca9d);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 6s ease infinite;
    -moz-animation: AnimationName 6s ease infinite;
    animation: AnimationName 6s ease infinite;
    
    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
`;

const ThirdContainer = styled.div`
const ThirdContainer = styled.div\`
    width: 100%;
    height: 84vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-image: url(${stock3});
    background-size: cover;
    background-repeat: no-repeat;
`;


class Home2 extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <ContentWrapper>
                    <FirstContainer>
                        <MissionText>
                            <MissionText1>Big data, data mining and
                                artificial intelligence are revolutionizing the ways we obtain value from data.
                            </MissionText1>
                            <MissionText2>Syntheticus uses state-of-the-art deep learning — allowing
                                users to unlock the power of synthetic data.
                            </MissionText2>
                        </MissionText>
                    </FirstContainer>
                    <SecondContainer>
                        <ContentBox>
                            <ExampleGraphBox>
                                <RadarChartResult />
                            </ExampleGraphBox>
                            <ExampleRightHalf>
                                <ExampleText>We live in a data driven generation where big data, data mining and
                                    artificial intelligence are revolutionizing the ways we obtain value from data.<br/><br/>
                                    Syntheticus is a powerful tool, that unlocks the power of your data, while providing full compliance with regulations on privacy and security.
                                </ExampleText>
                                <ButtonContainer><BlueButton><Link to="/login" style={{ textDecoration: 'none', color: '#fff' }}>get started</Link></BlueButton></ButtonContainer>
                            </ExampleRightHalf>
                        </ContentBox>
                        <BottomBar />
                    </SecondContainer>
                    <ThirdContainer>
                       <HomeExplainer />
                    </ThirdContainer>
                </ContentWrapper>
                <Footer />
            </div>
        )
    }
}

export default Home2;
