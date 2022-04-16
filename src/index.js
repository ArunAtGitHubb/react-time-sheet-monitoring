import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import userReducer from './store/reducers/userReducer';
import projectReducer from './store/reducers/projectReducer';
import './scss/main.scss'
import '../node_modules/bootstrap/dist/js/bootstrap'
import './index.css'


const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer
})

const store = createStore(rootReducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
