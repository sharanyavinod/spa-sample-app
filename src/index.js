import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"
import { ModelManager } from "@adobe/aem-spa-page-model-manager";

import { CustomModelClient } from './server/CustomModelClient';


const modelClient = new CustomModelClient(process.env.REACT_APP_AEM_HOST);
ModelManager.initializeAsync({
    modelClient,
    path: "/content/we-retail-journal/react/en.model.json"
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
