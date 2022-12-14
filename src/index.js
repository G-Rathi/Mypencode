import React from 'react';
import ReactDOM from 'react-dom/client';
import AppMain from './AppMain';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
);

reportWebVitals();
