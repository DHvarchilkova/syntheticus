import React, { useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MainHeader from '../MainHeader';

import logo from '../../assets/logo.png';
import stock3 from '../../assets/stock3.jpg';
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import { ValidationAction } from "../../store/actions/registrationValidationActions";


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
    height: 70vh;
    margin-top: 15vh;
    background-color: rgba(242, 242, 242, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    width: 146px;
    height: 155px;
    margin-top: 29px;
    margin-bottom: 5vh;
`;

const RegisterText = styled.p`
    width: 20vw;
    margin-bottom: 3vh;
    text-align: center;
    line-height: 1.5em;
`;

const UserNameField = styled.div`
    width: 20vw;
    height: 5vh;
    margin-top: 2vh;
`;

const LoginButton = styled.button`
    width: 10vw;
    height: 6vh;
    margin-top: 3vh;
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


const EmailValidation = (props) => {
     const [email, setEmail] = useState('');
     const [username, setUsername] = useState('');
     const [validation_code, setValidationCode] = useState('');
     const [password, setPassword] = useState('');
     const history = useHistory();
     const userCompleteRegistrationHandler = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            username: username,
            validation_code: validation_code,
            password: password
        };

        const userregistrationcompleted = await props.dispatch(ValidationAction(data));
        if (userregistrationcompleted) history.push('/login');

     };

        return (
            <div>
                <MainHeader />
                <ContentWrapper>
                <ContentContainer>
                    <LogInBlock>
                        <Logo src={logo} />
                        <RegisterText>Thank you. Please fill out these fields to complete your registration.</RegisterText>
                        <UserNameField>
                            <LoginInput type="text" placeholder="Your Validation Code*" value={validation_code} onChange={(e) => setValidationCode(e.currentTarget.value)}/>
                        </UserNameField>
                         <UserNameField>
                            <LoginInput type="text" placeholder="Username*" value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
                        </UserNameField>
                        <UserNameField>
                            <LoginInput type="text" required={true} placeholder="Email*" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                        </UserNameField>
                        <UserNameField>
                            <LoginInput type="password" required={true} placeholder="Password*" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                        </UserNameField>
                        <LoginButton type='submit' onClick={ userCompleteRegistrationHandler }>complete registration</LoginButton>
                    </LogInBlock>
                </ContentContainer>
                    <Footer />
                </ContentWrapper>
            </div>
        )
    }


export default connect()(EmailValidation);