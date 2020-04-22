import React, { Component } from 'react';
import styled from 'styled-components';

import finance from '../../assets/finance.jpg';
import medicine from '../../assets/medicine.jpg';
import science from '../../assets/science.jpg';
import crowd from '../../assets/crowd.jpg';
import graph from '../../assets/graph.jpg';
import earth from '../../assets/earth.jpg';


const ContentContainer=styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: space-between;
    padding-left: 126px;
    padding-right: 126px;
`;

const LeftContainer=styled.div`
    width: 45%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12%;
    background-color: rgba(242, 242, 242, 0.1);
`;

const RightContainer=styled.div`
    width: 45%;
    height: 75%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(242, 242, 242, 0.1);
`;

const ExplainerHeadline = styled.p`
    width: 90%;
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgb(99,195,255);
    text-align: center;
    margin-bottom: 24px;
`;

const ExplainerBox = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
`;

const ExplainerText = styled.p`
    width: 65%;
    color: #ffffff;
    font-size: 1.2em;
    line-height: 1.6em;
    text-shadow: 1px 1px 2px rgb(99,195,255);
`;

const ExplainerImage = styled.img`
    width: 30%;
    height: 90%;
`;


class HomeExplainer extends Component {
    render() {
        return (
            <ContentContainer>
                <LeftContainer>
                    <ExplainerHeadline>Leverage the Power of Big Data Analysis</ExplainerHeadline>
                    <ExplainerBox>
                        <ExplainerText>Synthetic data provides you with next-level knowledge to make analyses and predictions based on conditions that are not available in existing data.</ExplainerText>
                        <ExplainerImage src={graph} />
                    </ExplainerBox>
                    <ExplainerBox>
                        <ExplainerText>Syntheticus generates a wealth of data that represents real world conditions.<br/>
                        This allows you to make decisions based on knowledge that otherwise would take months to gather.</ExplainerText>
                        <ExplainerImage src={earth} />
                    </ExplainerBox>
                    <ExplainerBox>
                        <ExplainerText>Synthetic data is the only way to anonymize original data while keeping the statistical distribution of the original data, but with complete anonymity.</ExplainerText>
                        <ExplainerImage src={crowd} />
                    </ExplainerBox>
                </LeftContainer>
                <RightContainer>
                    <ExplainerHeadline>Next-level Knowledge for Innovators</ExplainerHeadline>
                    <ExplainerBox>
                        <ExplainerImage src={science}/>
                        <ExplainerText>Syntheticus creates data for innovators in sectors like:<br/><br/>
                        - Academics, providing reliable baseline data where none exists in the real world.</ExplainerText>
                    </ExplainerBox>
                    <ExplainerBox>
                        <ExplainerImage src={finance} />
                        <ExplainerText><br/>- Financial services, by making the testing the effectiveness of new fraud detection methods possible.</ExplainerText>
                    </ExplainerBox>
                     <ExplainerBox>
                        <ExplainerImage src={medicine} />
                        <ExplainerText><br/>- Health Care, allowing analysts to use medical data while keeping patient information confidential.</ExplainerText>
                    </ExplainerBox>
                </RightContainer>
            </ContentContainer>
        )
    }
}

export default HomeExplainer;