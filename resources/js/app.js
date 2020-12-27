require('./bootstrap');


import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import App from "./Application/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
);