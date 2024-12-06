import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from './Context/GlobalContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <GlobalContext >
      <App/>
      </GlobalContext > 
  </BrowserRouter>
);


