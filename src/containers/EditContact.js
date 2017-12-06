import React,{Component} from 'react';
import ContactForm from './ContactForm';
import {connect} from 'react-redux';
import {fetchContact} from '../actions/contacts';

class EditContact extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id)
  }

  handleSave = contact => {

  };
  render() {
    return (
      <div>
        <ContactForm onSubmit={this.handleSave}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contactStore.contact,
  isLoading: state.contactStore.isLoading
});

export default connect(mapStateToProps, {fetchContact})(EditContact)
