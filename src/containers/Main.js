import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteContact, fetchAllContacts, newContact} from '../actions/contacts';
import ContactList from '../components/ContactList';
import {FlatButton} from 'material-ui';
import {Link} from 'react-router-dom';

class Main extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }

  handleAdd = () => {
    this.props.newContact();
  }

  render() {
    return (
      <div>
        <div align="center">
          <Link to="/add"><FlatButton primary={true} onClick={this.handleAdd}>Add</FlatButton></Link>
        </div>
        <div>
          {this.props.isLoading ?
            'Loading...' :
            <ContactList
              contacts={this.props.contacts}
              deleteContact={this.props.deleteContact}/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contactStore.contacts,
  isLoading: state.contactStore.isLoading
});

export default connect(mapStateToProps, {fetchAllContacts, newContact, deleteContact})(Main);