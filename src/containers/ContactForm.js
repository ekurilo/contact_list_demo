import React, {Component} from 'react';
import {Field, Form, reduxForm} from 'redux-form';
import {FlatButton, TextField} from 'material-ui';


const createTextField = ({input, label, meta: {touched, error}}) => (
  <TextField hintText={label} {...input} errorText={touched && error}/>
);

const validate = values => {
  const requiredFields = [
    'firstName',
    'lastName',
    'phone'
  ];
  const labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    phone: 'Phone'
  };
  let errors = {};
  requiredFields.forEach(field => {
    if(!values[field]) {
      errors[field] = `${labels[field]} field is required`;
    }
  });
  return errors;
};
class ContactForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <div>
          <Field name="firstName" component={createTextField} label="First Name"/>
        </div>
        <div>
          <Field name="lastName" component={createTextField} label="LastName"/>
        </div>
        <div>
          <Field name="phone" component={createTextField} label="Phone"/>
        </div>
        <div>
          <FlatButton type="submit">Save</FlatButton>
        </div>
      </Form>
    );
  }
}

export default reduxForm({form: 'contactForm', validate})(ContactForm);