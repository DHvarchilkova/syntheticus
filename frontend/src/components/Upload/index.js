import React, { Component } from 'react';
import styled from 'styled-components';

import Body from '../Body';

import logo from '../../assets/logo.png';
import stock3 from '../../assets/stock3.jpg';


const FirstContainer = styled.div`
    width: 100%;
    height: 96vh;
    background: url(${stock3});
    background-size: cover;
    background-repeat: no-repeat;
`;

const UploadBlock = styled.div`
    width: 100%;
    height: 77vh;
    margin-top: 16.5vh;
    background-color: rgba(242, 242, 242, 0.8);
    display: flex;
    align-items: flex-start;
`;

const LeftMenu = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    align-items: flex-start;
    padding-left: 126px;
    padding-top: 126px;
`;

const UploadNavigation = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    line-height: 2.5em;
    cursor: pointer;
`;

const DragDropContainer = styled.div`
    height: 72%;
    width: 37%;
    margin-left: 10%;
`;

const DragDropField = styled.div`
    height: 40%;
    width: 75%;
    margin-top: 3%;
    margin-left: 3%;
    background: #ffffff;
`;

const MenuText = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 3%;
    margin-left: 3%;
`;


class Upload extends Component {
    render() {
        return (
            <Body>
                <FirstContainer>
                    <UploadBlock>
                        <LeftMenu>
                            <UploadNavigation>Runs</UploadNavigation>
                            <UploadNavigation>Account</UploadNavigation>
                            <UploadNavigation>Documentation</UploadNavigation>
                        </LeftMenu>
                        <DragDropContainer>
                            <MenuText>Launch A Run</MenuText>
                            <DragDropField></DragDropField>
                        </DragDropContainer>
                    </UploadBlock>

                </FirstContainer>
            </Body>
        )
    }
}

export default Upload;
