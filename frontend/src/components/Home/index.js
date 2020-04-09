import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png'


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Header = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    background-color: #ff9f63;
    justify-content: space-between;
    z-index: 1;
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
    justify-content: space-around;
    align-items: center;
`;

const Tagline1 = styled.h2`
    height: 100px;
    width: 180px;
    font-size: 36px;
    color: #ff9f63;
`;

const Tagline2 = styled.h2`
    height: 100px;
    width: 280px;
    font-size: 36px;
    color: #30afff;
`;

const Tagline3 = styled.h4`
    height: 100px;
    width: 280px;
    font-size: 36px;
    color: #6375ff;
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
                <Header/>
            </Wrapper>
        )
    }
}

export default Home;