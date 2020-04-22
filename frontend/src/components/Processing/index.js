import React, { Component } from 'react';
import styled from 'styled-components';

import Body from '../Body';
import Spinner from "./LoadingRing";


const FirstContainer = styled.div`
    width: 100%;
    height: 96vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const TextField=styled.p`
    width: 40vw;
    font-size: 24px;
    color: #ffffff;
    text-align: center;
    margin-top: 8vh;
`;


class Processing extends Component {
    render() {
        return(
            <Body>
                <FirstContainer>
                    <Spinner />
                    <TextField>We are currently processing your dataset.<br/><br/>
                    This may take a few moments, depending on the size.<br/><br/>
                    The results will be displayed and downloadable soon.</TextField>
                </FirstContainer>
            </Body>
        )
    }
}

export default Processing;