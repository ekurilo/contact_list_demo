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
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
