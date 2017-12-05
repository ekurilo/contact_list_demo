import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from 'material-ui';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers';
import thunkMiddleware from 'redux-thunk';
import {logger} from 'redux-logger';
import {fetchAllContacts} from './actions/contacts';
import {Provider} from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
