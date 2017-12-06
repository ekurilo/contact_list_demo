import React, {Component} from 'react';
import ContactForm from './ContactForm';
import {connect} from 'react-redux';
import {addContact} from '../actions/contacts';
import {Redirect} from 'react-router-dom';

class AddContact extends Component {
  state = {
    isRedirect: false
  };

  handleAdd = (contact) => {
    this.props.addContact(contact)
      .then(resp => this.setState({isRedirect: true}))
  };
  render() {
    return (
      <div>
        {this.state.isRedirect ? <Redirect to="/"/> : <ContactForm onSubmit={this.handleAdd} />}
      </div>
    );
  }
}

export default connect(state => state.contactStore, {addContact})(AddContact)