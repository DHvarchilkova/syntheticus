import React, { Component } from 'react';
import styled from 'styled-components';

import MainHeader from '../MainHeader';
import Footer from '../Footer';

import stock2 from '../../assets/stock2.jpg';
import stock3 from '../../assets/stock3.jpg';
import stock4 from '../../assets/stock4.jpg';
import chart from '../../assets/chart1.png';


const ContentWrapper = styled.div`
    width: 100%;
    height: 96vh;
    padding-top: 25vh;
    overflow: auto;
`;

const ContentContainer = styled.div`;
    margin-left: 126px;
    margin-right: 126px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 27vw;
    height: 30vh;
`;

const Textbox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const HomePageText = styled.h2`
    width: 27vw;
    padding: 40px;
    text-align: justify;
    line-height: 2em;
`;

const Graphbox = styled.div`
    width: 80vw;
    margin-top: 20px;
    margin-left: 15vw;
`;

const Graph = styled.img`
    width: 45vw;
`;

const GraphText = styled.h2`
    width: 32vw;
    line-height: 2em;
    text-align: justify;
`;


class Home extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <ContentWrapper>
                    <ContentContainer>
                        <ImageContainer>
                            <Image src={stock3} />
                            <Image src={stock4} />
                            <Image src={stock2} />
                        </ImageContainer>
                        <Textbox>
                            <HomePageText>We live in a data driven generation where big data, data mining and
                                artificial intelligence are revolutionizing the ways we obtain value from data.
                                The challenge is that both private companies and public entities have no way to easily
                                share this data internally or externally.
                            </HomePageText>
                            <HomePageText>The main hurdles are: Compliance laws, Fears
                                of data misuse, Patient / client privacy, Inability to transfer data securely.
                                Syntheticus tackles these hurdles using state-of-the-art deep learning — allowing
                                users to generate synthetic data which.
                            </HomePageText>
                            <HomePageText>
                                We live in a data driven generation where big data, data mining and
                                artificial intelligence are revolutionizing the ways we obtain value from data.
                                The challenge is that both private companies and public entities have no way to easily
                                share this data internally or externally.
                            </HomePageText>
                        </Textbox>
                        <Graphbox>
                            <Graph src={chart} />
                            <GraphText>Syntheticus tackles these hurdles using state-of-the-art deep learning —
                                allowing users to generate synthetic data which.
                            </GraphText>
                        </Graphbox>
                    </ContentContainer>
                </ContentWrapper>
                <Footer />
            </div>
        )
    }
}

export default Home;