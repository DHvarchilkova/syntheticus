import React, {Component, useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom"

import styled from 'styled-components';

import Body from '../Body';

import logo from '../../assets/logo.png';
import stock3 from '../../assets/stock3.jpg';
import { userLoginAction } from "../../store/actions/loginActions";


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


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const userLoginHandler = async (e) => {
        console.log('in loginhandler');
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };
        const userloggedin = await props.dispatch(userLoginAction(data));
        if (userloggedin){
            history.push("/datasets/upload");
        }
    };
        return (
            <Body>
                <ContentContainer>
                    <LogInBlock>
                        <Logo src={logo}/>
                        <UserNameField>
                            <LoginInput type="text" placeholder="email"
                                        onChange={(e) => setEmail(e.currentTarget.value)}/>
                        </UserNameField>
                        <UserNameField>
                            <LoginInput type="text" placeholder="password"
                                        onChange={(e) => setPassword(e.currentTarget.value)}/>
                        </UserNameField>
                        <LoginButton type='submit' onClick={userLoginHandler}>login</LoginButton>
                        <ForgotPasswordSignUpText>Forgot Your Password? Click Here. | New User? <a href={"/register"}
                                                                                                   style={{textDecoration: 'none'}}>Sign
                            Up.</a>
                        </ForgotPasswordSignUpText>
                    </LogInBlock>
                </ContentContainer>
            </Body>
        )
    }



export default connect()(Login);