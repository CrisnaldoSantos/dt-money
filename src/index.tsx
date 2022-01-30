import ReactDOM from 'react-dom';
import React from 'react';
import { mock } from 'mock/mirage';
import App from './App';

mock();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
