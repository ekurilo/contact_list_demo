import React,{Component} from 'react';
import ContactForm from './ContactForm';
import {connect} from 'react-redux';
import {fetchContact, updateContact} from '../actions/contacts';
import {Redirect} from 'react-router-dom';

class EditContact extends Component {
  state = {
    isRedirect: false
  };
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id)
  }

  handleSave = contact => {
    this.props.updateContact(this.props.contact.id, contact)
      .then(resp => this.setState({isRedirect: true}))
  };
  render() {
    return (
      <div>
        {this.state.isRedirect ? <Redirect to="/"/> : <ContactForm onSubmit={this.handleSave}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contactStore.contact,
  isLoading: state.contactStore.isLoading
});

export default connect(mapStateToProps, {fetchContact, updateContact})(EditContact)
