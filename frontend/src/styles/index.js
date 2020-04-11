import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: "Lucida Grande", sans-serif;
    font-size: 16px;
    color: #353535;
    box-sizing: border-box;
    }
    html {
        height: 100%;
    body {
        height: 100%;
        background-color: #ffffff;
    }
    #root {
        height: 100%;
`;

export const theme = {
    background: '#ebebeb',
    houseblue: '#63c3ff',
    accentblue: '#4eb1fc',
    accentpurple: '#8088fd',
    accentorange: '#ff9f63',
};