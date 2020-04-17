import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Body from '../Body';
import { registrationAction } from "../../store/actions/registrationActions";

import logo from '../../assets/logo.png';
import stock3 from '../../assets/stock3.jpg';


const ContentContainer = styled.div`
    width: 100vw;
    height: 96vh;
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
    height: 60vh;
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
    margin-top: 2vh;
    margin-bottom: 5vh;
`;

const RegisterText = styled.p`
    width: 20vw;
    margin-bottom: 2vh;
    text-align: center;
    line-height: 1.5em;
`;

const UserNameField = styled.div`
    width: 20vw;
    height: 5vh;
    margin-top: 3vh;
    margin-bottom: 2vh;
`;

const LoginButton = styled.button`
    width: 10vw;
    height: 5vh;
    margin-top: 4vh;
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


const Register = ({ error, registrationAction, history, match }) => {

    let [email, setEmail] = useState('');

    const handleInputChange = e => setEmail(e.target.value);

    const handleSubmit = async (e) => {
        console.log('in handleSubmit');
        e.preventDefault();
        const response = await registrationAction(email);
        if (response.status < 400) {
            history.push("/register/complete");
        }
    };

        return(
            <Body>
                <ContentContainer>
                    <RegisterBlock>
                        <Logo src={logo} />
                        <RegisterText>Please enter your email address. We will send you a verification code to complete your registration.</RegisterText>
                        <UserNameField>
                            <LoginInput type="text" required='true' placeholder="Email*" value={email} onChange={ handleInputChange } />
                        </UserNameField>
                        <LoginButton type='submit' onClick={ handleSubmit }>register</LoginButton>
                        <ForgotPasswordSignUpText>We don't share your data.</ForgotPasswordSignUpText>
                    </RegisterBlock>
                </ContentContainer>
            </Body>
        )
}

export default connect()(Register);