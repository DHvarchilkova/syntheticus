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
    justify-content: center;
`;

const DragDropField = styled.div`
    height: 80%;
    width: 85%;
    margin-top: 4%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    margin-bottom: 50px;
`;


class Upload extends Component {
    render() {
        return (
            <Body>
                <FirstContainer>
                    <UploadBlock>
                            <DragDropField>
                                <MenuText>Submit A Dataset (.gzip)</MenuText>
                                <Dropzone />
                                <UploadButton>upload</UploadButton>
                            </DragDropField>
                    </UploadBlock>
                </FirstContainer>
            </Body>
        )
    }
}

export default Upload;
