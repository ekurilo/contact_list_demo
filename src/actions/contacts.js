
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

const contactUrl = 'http://localhost:8090/api/contacts';

export const fetchAllContacts = () => dispatch => {
  dispatch(fetchAllContactsRequest());
  return fetch(contactUrl)
    .then(resp => resp.json())
    .then(json => dispatch(fetchAllContactsSuccess(json._embedded.contacts)))
    .catch(error => dispatch(fetchAllContactsFailure(error)));
};