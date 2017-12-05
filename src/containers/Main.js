import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllContacts} from '../actions/contacts';
import ContactList from '../components/ContactList';
import {FlatButton} from 'material-ui';
import {Link} from 'react-router-dom';

class Main extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }

  render() {
    return (
      <div>
        <div align="center">
          <Link to="/add"><FlatButton primary={true}>Add</FlatButton></Link>
        </div>
        <div>
          {this.props.isLoading ? 'Loading...' : <ContactList contacts={this.props.contacts}/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contactStore.contacts,
  isLoading: state.contactStore.isLoading
});

export default connect(mapStateToProps, {fetchAllContacts})(Main);