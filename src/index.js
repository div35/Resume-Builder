import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './store/reducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const fbConfig = {
  apiKey: 'AIzaSyDW1fsYusedmDKylTYC0fYl2TBsdvp9djQ',
  authDomain: 'resume-builder-ad695.firebaseapp.com',
  databaseURL: 'https://resume-builder-ad695.firebaseio.com',
  projectId: 'resume-builder-ad695',
  storageBucket: 'resume-builder-ad695.appspot.com',
  messagingSenderId: '937837071579',
  appId: '1:937837071579:web:4d5c832c12fbaa21c190fe',
  measurementId: 'G-8NLWLMVEKV',
};


let store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
