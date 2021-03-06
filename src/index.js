import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // add this
import 'bootstrap/dist/js/bootstrap.js';
//import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import * as serviceWorker from './serviceWorker';

require('dotenv').config();

ReactDOM.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
