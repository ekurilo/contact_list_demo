import React, {Component} from 'react';
import {Contact} from './Contact';

export default class ContactList extends Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    fetch('http://localhost:8090/api/contacts')
      .then(resp => resp.json())
      .then(json => this.setState({contacts: json._embedded.contacts}))
  }

  render() {
    let contacts = this.state.contacts.map(contact => <Contact key={contact.id} contact={contact}/>);
    return (
      <div>
        {contacts}
      </div>
    );

  }
}