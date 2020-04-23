import React, { Component, useState } from 'react';
import Axios from '../../axios';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom"
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Body from '../Body';
import { WhiteButton} from "../../styles/GlobalButtons";
import Processing from "../Processing";

import stock3 from '../../assets/stock3.jpg';
import {userLoginAction} from "../../store/actions/loginActions";


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
    margin-top: 20px;
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
    state = {
        isLoading: false
    }


    getGeneratedData =async (e) => {
        console.log("in getGeneratedData", this.props)
        const token = localStorage.getItem('token')
        const headers = {Authorization: `Bearer ${token}`}
        const username = localStorage.getItem('username')
        const datasetName = localStorage.getItem('lastUploadedFile')
        const modelType = 'CTGAN'
        this.setState({isLoading:true})
        // const response = await axios.get(`http://104.248.137.182:5001/fit_generate/${username}/${modelType}/${datasetName}`,
        const response = await Axios.get(`datasets/get_generated/${username}/${modelType}/${datasetName}`,
            { headers})
        //need to get the json report - call to the endpoint - is response.ok then storing the (json data) state in redux
        //redirect to the charts

        console.log(response)
        this.setState({isLoading:false})
        if (response) {
           //
            //history.push("/processing");
        }
    }
    render() {
        return (
            <Body>
                {this.state.isLoading ? <Processing/> :
                    <FirstContainer>
                        <UploadBlock>
                            <DragDropField>
                                <UploadSuccess>
                                    <SuccessText>Your Dataset Was Uploaded Successfully</SuccessText>
                                    <SuccessSubText>Choose the Model Type and Number of Rows to be processed so that the
                                        synthetic data to be generated</SuccessSubText>
                                </UploadSuccess>
                                <ChooseModelRows>
                                    <ChooseModel>
                                        <MenuText>Select Model Type</MenuText>
                                        <DropDownMenu>
                                            <option>Select...</option>
                                            <option>CTGAN</option>
                                            <option>TSGAN</option>
                                            <option>OTHER METHODS SOON</option>
                                        </DropDownMenu>
                                    </ChooseModel>
                                    <ChooseRows>
                                        <MenuText>Choose Number of Rows</MenuText>
                                        <DropDownMenu>
                                            <option>Select...</option>
                                            <option>1000</option>
                                            <option>5000</option>
                                            <option>OTHER OPTIONS</option>
                                        </DropDownMenu>
                                    </ChooseRows>
                                </ChooseModelRows>
                                <WhiteButton type='submit' onClick={this.getGeneratedData} style={{marginBottom: "5%"}}>Start
                                    Syntheticus</WhiteButton>
                            </DragDropField>
                        </UploadBlock>
                    </FirstContainer>
                }
            </Body>
        )}

}


export default connect()(ChooseOptions);
