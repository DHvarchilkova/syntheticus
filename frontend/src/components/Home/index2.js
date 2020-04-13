import React, { Component } from 'react';
import styled from 'styled-components';

import Body from '../Body';
import stock4 from '../../assets/stock4.jpg';

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
    margin-top: 42vh;
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


class Home2 extends Component {
    render() {
        return (
            <Body>
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
            </Body>
        )
    }
}

export default Home2;
