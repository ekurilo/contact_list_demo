
const fetchAllContactsRequest = () => ({
  type: 'FETCH_ALL_CONTACTS_REQUEST'
});

const fetchAllContactsSuccess = contacts => ({
  type: 'FETCH_ALL_CONTACTS_SUCCESS',
  contacts
});

const fetchAllContactsFailure = error => ({
  type: 'FETCH_ALL_CONTACTS_FAILURE',
  error
});

const addContactRequest = () => ({
  type: 'ADD_CONTACT_REQUEST'
});

const addContactSuccess = contact => ({
  type: 'ADD_CONTACT_SUCCESS',
  contact
});

const addContactFailure = error => ({
  type: 'ADD_CONTACT_FAILURE',
  error
});

export const newContact = () => dispatch => dispatch({
  type: 'NEW_CONTACT'
});

const contactUrl = 'http://localhost:8090/api/contacts';

export const fetchAllContacts = () => dispatch => {
  dispatch(fetchAllContactsRequest());
  return fetch(contactUrl)
    .then(resp => resp.json())
    .then(json => dispatch(fetchAllContactsSuccess(json._embedded.contacts)))
    .catch(error => dispatch(fetchAllContactsFailure(error)));
};

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  return fetch(contactUrl, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(resp => resp.json())
    .then(json => dispatch(addContactSuccess(json)))
    .catch(error => dispatch(addContactFailure(error)))
};