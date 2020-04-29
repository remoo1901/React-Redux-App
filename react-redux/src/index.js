import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux";
import {titleReducer} from "./reducers/index"
import thunk from "redux-thunk"


let store = createStore(titleReducer, applyMiddleware(thunk));
 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
