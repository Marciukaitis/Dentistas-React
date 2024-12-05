import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Styles/index.css"

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from './Context/GlobalContext';
import { ThemeContext } from './Context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 


  <GlobalContext >
      <App/>
      </GlobalContext >
    
  </BrowserRouter>
);


