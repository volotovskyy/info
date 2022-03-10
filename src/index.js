import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/index.css';
import App from './App';

import Modal from 'react-modal';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
