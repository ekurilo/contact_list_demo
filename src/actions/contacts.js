
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

const deleteContactRequest = contact => ({
  type: 'DELETE_CONTACT_REQUEST',
  contact
});

const deleteContactSuccess = contact => ({
  type: 'DELETE_CONTACT_SUCCESS',
  contact
});

const deleteContactFailure = error => ({
  type: 'DELETE_CONTACT_FAILURE',
  error
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

export const deleteContact = contact => dispatch => {
  dispatch(deleteContactRequest(contact));
  return fetch(`${contactUrl}/${contact.id}`, {
    method: 'delete'
  })
    .then(resp => dispatch(deleteContactSuccess(contact)))
    .catch(error => dispatch(deleteContactFailure(error)))
};

export const fetchContact = id => dispatch => {
  dispatch({type: 'FETCH_CONTACT_REQUEST', id});
  return fetch(`${contactUrl}/${id}`)
    .then(resp => resp.json())
    .then(contact => dispatch({type: 'FETCH_CONTACT_SUCCESS', contact}))
    .catch(error => dispatch({type: 'FETCH_CONTACT_FAILURE', error}))
};

export const updateContact = (id, contact) => dispatch => {
  dispatch({type: 'UPDATE_CONTACT_REQUEST'});
  return fetch(`${contactUrl}/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(resp => resp.json())
    .then(contact => dispatch({type: 'UPDATE_CONTACT_SUCCESS', contact}))
    .catch(error => dispatch({type: 'UPDATE_CONTACT_FAILURE', error}))
}