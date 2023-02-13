import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

const store = configureStore({ reducer: Reducers, middleware: [thunk] });
// Kommunicate.init('b483602a953033194377a2245709e211');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import Reducers from './reducers';
// // import reportWebVitals from './reportWebVitals';

// const store = configureStore({ reducer: Reducers, middleware: [thunk] });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
