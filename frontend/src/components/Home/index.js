import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.jpg'


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Logo = styled.img`
    height: 1100px;
    width: 100%;
    margin-top: -200px;
    margin-bottom: -150px;
`;

const Tagline = styled.div`
    height: 200px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Tagline1 = styled.h2`
    height: 100px;
    width: 200px;
    font-size: 36px;
    color: #4eb1fc;
`;

const Tagline2 = styled.h2`
    height: 100px;
    width: 400px;
    font-size: 36px;
    color: #8088fd;
`;

const Tagline3 = styled.h4`
    height: 100px;
    width: 500px;
    font-size: 36px;
    color: #80fdf5;
`;


class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Logo src={logo}/>
                <Tagline>
                    <Tagline1>Share Data.</Tagline1>
                    <Tagline2>Without Sharing Data.</Tagline2>
                    <Tagline3>Built in Zurich, Switzerland.</Tagline3>
                </Tagline>
            </Wrapper>
        )
    }
}

export default Home;