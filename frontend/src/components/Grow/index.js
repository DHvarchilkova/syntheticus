import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Streamer = styled.div`
    height: 0.5rem;
    width: 100%;
    display: flex;
    background-color: #6375ff;
`;

const Logo = styled.img`
    height: 315px;
    width: 306px;
    padding: 40px;
`;

const Menu = styled.h3`
    width: 2em;
`;


class Grow extends Component {
    render() {
        return (
            <Wrapper>
                <Streamer />
                <Logo src={logo}/>
                <Menu>Home</Menu>
                <Menu>Solution</Menu>
            </Wrapper>
        )
    }
}

export default Grow;