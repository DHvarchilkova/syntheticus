import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from './styles';
import store from "./store/index";



import Routes from './routes';
import {userLoginDispatch} from "./store/actions/loginActions";

// Setting up the token for all the components:
const token = localStorage.getItem("token");
if (token) {
  store.dispatch(userLoginDispatch(token));

}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
