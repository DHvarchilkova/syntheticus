import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';

import logo from '../../assets/logo.png';
import stock3 from '../../assets/stock3.jpg';
import Footer from "../Footer";


const ContentWrapper = styled.div`
    width 100%;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 96vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${stock3});
    background-size: cover;
    background-repeat: no-repeat;
`;

const LogInBlock = styled.div`
    width: 30vw;
    height: 30vw;
    margin-top: 18vh;
    background-color: rgba(242, 242, 242, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    width: 146px;
    height: 155px;
    margin-top: 29px;
`;

const UserNameField = styled.div`
    width: 20vw;
    height: 5vh;
    margin-top: 7vh;
`;

const LoginButton = styled.button`
    width: 10vw;
    height: 5vh;
    margin-top: 8vh;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    border-style: none;
    text-transform: uppercase;
    background-color: #63c3ff;
`;

const LoginInput = styled.input`
width: 100%;
height: 52px;
padding: 0px 0px 0px 30px;
`;


class EmailValidation extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <ContentWrapper>
                <ContentContainer>
                    <LogInBlock>
                        <Logo src={logo} />
                        <UserNameField>
                            <LoginInput type="text" placeholder="Your Verification Code*" />
                        </UserNameField>
                        <LoginButton>complete registration</LoginButton>
                    </LogInBlock>
                </ContentContainer>
                    <Footer />
                </ContentWrapper>
            </div>
        )
    }
}

export default EmailValidation;