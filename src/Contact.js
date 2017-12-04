import React, {Component} from 'react';

export const Contact = props => (
  <div>
    <div>First Name: {props.contact.firstName}</div>
    <div>Last Name: {props.contact.lastName}</div>
    <div>Phone: {props.contact.phone}</div>
  </div>
);