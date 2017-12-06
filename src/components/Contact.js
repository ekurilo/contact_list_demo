import React, {Component} from 'react';
import {Card, CardActions, FlatButton} from 'material-ui';
import {deleteContact} from '../actions/contacts';
import {Link} from 'react-router-dom';

export const Contact = ({contact, deleteContact}) => (
  <Card>
    <div>First Name: {contact.firstName}</div>
    <div>Last Name: {contact.lastName}</div>
    <div>Phone: {contact.phone}</div>
    <CardActions>
      <Link to={`/edit/${contact.id}`}><FlatButton primary={true}>Edit</FlatButton></Link>
      <FlatButton secondary={true}
                  onClick={() => deleteContact(contact)}>Delete</FlatButton>
    </CardActions>
  </Card>
);