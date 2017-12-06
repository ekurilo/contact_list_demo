import React, {Component} from 'react';
import {Card, CardActions, FlatButton} from 'material-ui';
import {deleteContact} from '../actions/contacts';

export const Contact = ({contact, deleteContact}) => (
  <Card>
    <div>First Name: {contact.firstName}</div>
    <div>Last Name: {contact.lastName}</div>
    <div>Phone: {contact.phone}</div>
    <CardActions>
      <FlatButton primary={true}>Edit</FlatButton>
      <FlatButton secondary={true}
                  onClick={() => deleteContact(contact)}>Delete</FlatButton>
    </CardActions>
  </Card>
);