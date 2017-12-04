import React, {Component} from 'react';
import {Card, CardActions, FlatButton} from 'material-ui';

export const Contact = props => (
  <Card>
    <div>First Name: {props.contact.firstName}</div>
    <div>Last Name: {props.contact.lastName}</div>
    <div>Phone: {props.contact.phone}</div>
    <CardActions>
      <FlatButton primary={true}>Edit</FlatButton>
      <FlatButton secondary={true}>Delete</FlatButton>
    </CardActions>
  </Card>
);