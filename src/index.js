import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// *****************************24/09/22***************************************//

// import Table from'./table'
// import './index.css';
// ReactDOM.createRoot(document.querySelector("#root")).render(<Table/>)


// *****************************24/09/22***************************************//

//this is a component we can create any type of component class type,function type
//this is what the component look-like--->

import TeslaHome from './TeslaHome'
ReactDOM.createRoot(
  document.querySelector("#root")
).render(<TeslaHome/>)