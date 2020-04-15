import React, { Component } from 'react';
import styled from 'styled-components';

import Body from '../Body';
import Dropzone from '../Dropzone/dropzone';
import { MenuButton } from "../../styles/GlobalButtons";
import { WhiteButton} from "../../styles/GlobalButtons";

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
    background-color: rgba(242, 242, 242, 0.9);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 5%;
`;

const SubContainer = styled.div`
    height: 72%;
    width: 30%;
    margin-top: 6%;
`;

const DragDropField = styled.div`
    height: 60%;
    width: 75%;
    margin-top: 3%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;


const MenuText = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 3%;
`;

const UploadButton = styled(WhiteButton)`
    width: 165px;
    height: 40px;
    margin-top: 40px;
    margin-bottom: 20px;
`;


class Upload extends Component {
    render() {
        return (
            <Body>
                <FirstContainer>
                    <UploadBlock>
                        <SubContainer>
                            <MenuText>Submit A Dataset (.gz .csv)</MenuText>
                            <DragDropField>
                                <Dropzone />
                                <UploadButton>upload</UploadButton>
                            </DragDropField>
                        </SubContainer>
                        <SubContainer>
                            <MenuText>Choose Specifications</MenuText>
                            <DragDropField>

                            </DragDropField>
                        </SubContainer>
                        <SubContainer>
                            <MenuText>Choose Specifications</MenuText>
                            <DragDropField>

                            </DragDropField>
                        </SubContainer>
                    </UploadBlock>
                </FirstContainer>
            </Body>
        )
    }
}

export default Upload;
