import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';  //before this was using instead of Counter
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import Counter from './components/counter';
// import Counters from './components/counters'; //before app this was using.
// import AgainCounter from './again/again';


import AgainCounter from './again/again';
import Inputs from './dynamicPractice/Inputs';


ReactDOM.render(
  <React.StrictMode>
     {/* <App/> */}
     {/* <App/> */}   {/* this is old pracice */}
     {/* do again same practice. */}
     {/* <AgainCounter /> */}
     <Inputs></Inputs>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
