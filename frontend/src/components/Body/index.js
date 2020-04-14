import React from 'react';
import styled from 'styled-components';


import MainHeader from "../../components/MainHeader";
import Footer from "../Footer";

const Page = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
background-color: #ffffff;
`;

const BodyBelly = styled.div`
height: 96vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow: auto;
`;

export default function Body(props) {
	const render = () => {
		return (
			<Page>
				<MainHeader />
				<BodyBelly>
					{props.children}
				</BodyBelly>
				<Footer />
			</Page>
		)
	}

	return render()
}
