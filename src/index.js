import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter,Routes,Route} from "react-router-dom";
import App from "./App";
// import Home from "./Home";
// import About from "./About";
// import Product from "./Product";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,


  //<AppProvider>
  //  <App />
  //</AppProvider>,
  document.getElementById('root')
);