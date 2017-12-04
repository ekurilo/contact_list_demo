import React, {Component} from 'react';
import {Contact} from './Contact';
import {FlatButton, GridList} from 'material-ui';

export default class ContactList extends Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    fetch('http://localhost:8090/api/contacts')
      .then(resp => resp.json())
      .then(json => this.setState({contacts: json._embedded.contacts}));
  }

  render() {
    let contacts = this.state.contacts.map(contact => <Contact key={contact.id} contact={contact}/>);
    return (
      <div>
        <FlatButton primary={true}>Add</FlatButton>
        <GridList cols={3}>
          {contacts}
        </GridList>
      </div>

    );

  }
}