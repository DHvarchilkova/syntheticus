import React, { Component } from 'react';
import styled from 'styled-components';

import propulsionLogo from '../../assets/propulsion_hor.png';

const FooterWrapper = styled.div`
    width: 100%;
    height: 4%;
    position: fixed;
`;

const FooterContainer = styled.div`
    height: 50px;
    min-width: 100%;
    box-shadow: 4px 0px 18px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
`;

const SocialMediaIconContainer = styled.div`
    height: 4vh;
    display: flex;
    align-items: center;
`;

const FooterTextContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin-right: 10px;
    margin-bottom: 10px;
`;

const FooterText =  styled.p`
    font-size: 12px;
    margin-bottom: 12px;
    margin-right: 7px;
`;

const PropulsionLogo = styled.img`
    height: 35px;
`;


class Footer extends Component {
    render() {
        return (
            <div>
                <FooterWrapper>
                    <FooterContainer>
                        <SocialMediaIconContainer>

                        </SocialMediaIconContainer>
                        <FooterTextContainer>
                            <FooterText>Syntheticus. Built at Propulsion Academy in Zurich, Switzerland.</FooterText>
                            <a href={"https://propulsion.academy"} target={"_blank"}>
                                <PropulsionLogo src={ propulsionLogo }/>
                            </a>
                        </FooterTextContainer>
                    </FooterContainer>
                </FooterWrapper>
            </div>
        )
    }
}

export default Footer;