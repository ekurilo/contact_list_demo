import React, {Component} from 'react';
import './App.css';
import Main from './containers/Main';
import {Route, Switch} from 'react-router-dom';
import AddContact from './containers/AddContact';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/add" component={AddContact}/>
      </Switch>
    );
  }
}

export default App;
