import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif
    font-size: 16px;
    box-sizing: border-box;
    }
    body {
        background-color: #ffffff;
    }
`;

export const theme = {
    background: '#ebebeb',
    houseblue: '#80c7fd',
    accentblue: '#4eb1fc',
    accentpurple: '#8088fd',
    accentturq: '#80fdf5',
};