import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './component/app/app';
import combineReducers from './reducer/main';
// import categoriesReducer from './reducer/category';
import './styles/main.scss';


//------------------------------------------------------------
// Setting up the Store
//------------------------------------------------------------
const middleware = {};
// combined reducer to replace just cats one. TODO:
const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(...middleware)));
//------------------------------------------------------------
// Redering
//------------------------------------------------------------
const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);
