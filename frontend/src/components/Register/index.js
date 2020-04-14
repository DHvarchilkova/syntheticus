import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';


import logo from '../../assets/logo.png';
import stock3 from '../../assets/stock3.jpg';


const ContentWrapper = styled.div`
    width 100%;
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

const RegisterBlock = styled.div`
    width: 30vw;
    height: 60vw;
    margin-top: 20vh;
    margin-bottom: 5vh;
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
`;

const UserNameField = styled.div`
    width: 20vw;
    height: 5vh;
    margin-top: 3vh;
`;

const PasswordField = styled.div`
    width: 20vw;
    height: 5vh;
    margin-top: 3vh;
`;

const LoginButton = styled.button`
    width: 10vw;
    height: 5vh;
    margin-top: 3vh;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    border-style: none;
    text-transform: uppercase;
    background-color: #63c3ff;
`;

const ForgotPasswordSignUpText = styled.p`
    font-size: 0.75em;
    margin-top: 5vh;
`;

const LoginInput = styled.input`
width: 100%;
height: 52px;
padding: 0px 0px 0px 30px;
`;


class Register extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <ContentWrapper>
                <ContentContainer>
                    <RegisterBlock>
                        <Logo src={logo} />
                        <UserNameField>
                            <LoginInput type="text" placeholder="First Name" />
                        </UserNameField>
                        <UserNameField>
                            <LoginInput type="text" placeholder="Last Name" />
                        </UserNameField>
                        <UserNameField>
                            <LoginInput type="text" required='true' placeholder="Email*" />
                        </UserNameField>
                        <PasswordField>
                            <LoginInput type="password" required='true' placeholder="Password*" />
                        </PasswordField>
                        <PasswordField>
                            <LoginInput type="password" required='true' placeholder="Confirm Password*" />
                        </PasswordField>
                        <LoginButton>register</LoginButton>
                        <ForgotPasswordSignUpText>We don't share your data.</ForgotPasswordSignUpText>
                    </RegisterBlock>
                </ContentContainer>
                </ContentWrapper>
            </div>
        )
    }
}

export default Register;