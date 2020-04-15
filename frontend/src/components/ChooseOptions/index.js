import React, { Component } from 'react';
import styled from 'styled-components';

import Body from '../Body';
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
    justify-content: space-around;
    align-items: center;
`;

const UploadSuccess = styled.div`
    width: 85%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SuccessText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const SuccessSubText = styled.p`
    margin-top: 50px;
    text-align: center;
`;

const ChooseModelRows = styled.div`
    width: 85%;
    height: 60%;
    display: flex;
    justify-content: space-around;
`;

const ChooseModel = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ChooseRows = styled.div`
     width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuText = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const DropDownMenu = styled.select`
    width: 60%;
    padding-left: 10px;
    border: 2px solid #63c3ff;
`;

const RowsInput = styled.input`
    width: 60%;
    height: 25px;
    padding-left: 10px;
    border: 2px solid #63c3ff;
`;


class ChooseOptions extends Component {
    render() {
        return (
            <Body>
                <FirstContainer>
                    <UploadBlock>
                            <DragDropField>
                                <UploadSuccess>
                                    <SuccessText>Your Dataset Was Uploaded Successfully.</SuccessText>
                                    <SuccessSubText>Below, please specify your choice for Model Type and Number of Rows.</SuccessSubText>
                                </UploadSuccess>
                                <ChooseModelRows>
                                    <ChooseModel>
                                        <MenuText>Select Model Type</MenuText>
                                         <DropDownMenu>
                                            <option>Select...</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <option>E</option>
                                            <option>F</option>
                                         </DropDownMenu>
                                    </ChooseModel>
                                    <ChooseRows>
                                        <MenuText>Choose Number of Rows</MenuText>
                                        <RowsInput type="text" placeholder="The dataset you uploaded has 500 rows." />
                                    </ChooseRows>
                                </ChooseModelRows>
                            </DragDropField>
                    </UploadBlock>
                </FirstContainer>
            </Body>
        )
    }
}

export default ChooseOptions;
