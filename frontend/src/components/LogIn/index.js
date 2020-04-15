import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';

import logo from '../../assets/logo.png';
import stock3 from '../../assets/stock3.jpg';


const ContentWrapper = styled.div`
    width 100vw;
`;

const ContentContainer = styled.div`
    width: 100vw;
    height: 100vh;
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
    margin-top: 10vw;
    background-color: rgba(242, 242, 242, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 146px;
    height: 155px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const UserNameField = styled.div`
    width: 20vw;
    height: 3vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
`;

const LoginButton = styled.button`
    width: 10vw;
    height: 5vh;
    margin-top: 5vh;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    border-style: none;
    text-transform: uppercase;
    background-color: #63c3ff;
`;

const ForgotPasswordSignUpText = styled.p`
    margin-top: 3vh;
`;

const LoginInput = styled.input`
width: 100%;
height: 52px;
padding: 0px 0px 0px 30px;
`;


class LogIn extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <ContentWrapper>
                <ContentContainer>
                    <LogInBlock>
                        <Logo src={logo} />
                        <UserNameField>
                            <LoginInput type="text" placeholder="Username*" />
                        </UserNameField>
                        <UserNameField>
                            <LoginInput type="text" placeholder="Email*" />
                        </UserNameField>
                        <UserNameField>
                            <LoginInput type="text" placeholder="Password*" />
                        </UserNameField>
                        <LoginButton>login</LoginButton>
                        <ForgotPasswordSignUpText>Forgot Your Password? Click Here. | New User? <a href={"/register"} style={{ textDecoration: 'none' }}>Sign Up.</a>
                        </ForgotPasswordSignUpText>
                    </LogInBlock>
                </ContentContainer>
                </ContentWrapper>
            </div>
        )
    }
}

export default LogIn;