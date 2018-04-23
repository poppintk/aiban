import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MobileApp from './mobile_app';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <MobileApp />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
