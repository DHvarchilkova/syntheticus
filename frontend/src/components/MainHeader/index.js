import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';


const HeaderWrapper = styled.div`
    min-width: 100%;
    height: 13vh;
    position: fixed;
`;

const Streamer = styled.div`
    height: 0.4rem;
    background: linear-gradient(to right, #ffffff, #63c3ff, #8088fd);
`;

const Header = styled.div`
    height: 13vh;
    min-width: 100%;
    background-color: #ffffff;
    box-shadow: 4px 0px 18px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
`;

const LogoTaglineContainer = styled.div`
    height: 13vh;
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 115px;
    width: 106px;
    margin-left: 20px;
    margin-top: 0.4rem;
`;

const Tagline = styled.div`
    line-height: 2em;
    margin-left: 60px;
`;

const TaglineText = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    background: -webkit-linear-gradient(#63c3ff, #8088fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
`;

const NavMenu = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 8px;
`;

const NavMenuText = styled.h3`
    margin-right: 45px;
    cursor: pointer;
    transition: color 0.5s, font-size 0.5s;
    :hover {
        color: #8088fd;
        font-size: 20px;
    }
`;


class MainHeader extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Streamer />
                    <Header>
                        <LogoTaglineContainer>
                            <a href="https://syntheticus.propulsion-learn.ch">
                                <Logo src={logo}/>
                            </a>
                            <Tagline>
                                <TaglineText>share data.</TaglineText>
                                <TaglineText>without sharing data.</TaglineText>
                            </Tagline>
                        </LogoTaglineContainer>
                        <NavMenu>
                            <NavMenuText><a href={"/"} style={{ textDecoration: 'none' }}>Home</a></NavMenuText>
                            <NavMenuText><a href={"/"} style={{ textDecoration: 'none' }}>Solution</a></NavMenuText>
                            <NavMenuText><a href={"/upload"} style={{ textDecoration: 'none' }}>Upload Data</a></NavMenuText>
                            <NavMenuText><a href={"/about"} style={{ textDecoration: 'none' }}>About Us</a></NavMenuText>
                            <NavMenuText><a href={"/login"} style={{ textDecoration: 'none' }}>Login</a></NavMenuText>
                        </NavMenu>
                    </Header>
                </HeaderWrapper>
            </div>
        )
    }
}

export default MainHeader;