import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Body from '../Body';
import MyUploader from "../Dropzone2";
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
    height: 67vh;
    margin-top: 26.5vh;
    display: flex;
    justify-content: center;
`;

const DragDropField = styled.div`
    height: 60%;
    width: 35%;
    margin-top: 4%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
`;


class Upload extends Component {
    render() {
        return (
            <Body>
                <FirstContainer>
                    <UploadBlock>
                            <DragDropField>
                                <MenuText>Submit A Dataset (.csv.gz)</MenuText>
                                <MyUploader />
                                <Link to="/specify"><UploadButton>next ></UploadButton></Link>
                            </DragDropField>
                    </UploadBlock>
                </FirstContainer>
            </Body>
        )
    }
}

export default Upload;
