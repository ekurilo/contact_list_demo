import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from 'material-ui';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers';
import thunkMiddleware from 'redux-thunk'
import {logger} from 'redux-logger';
import {fetchAllContacts} from './actions/contacts';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
store.dispatch(fetchAllContacts());

ReactDOM.render(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();
