export default (state = {contacts: [], contact: {}, toDelete: {}, isLoading: false, error: {}}, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CONTACTS_REQUEST':
      return {
        ...state,
        isLoading: true,
        contacts: []
      };

    case 'FETCH_ALL_CONTACTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        contacts: action.contacts
      };

    case 'FETCH_ALL_CONTACTS_FAILURE':
      return {
        ...state,
        isLoading: false,
        contacts: [],
        error: action.error
      };

    case 'NEW_CONTACT':
      return {
        ...state,
        contact: {}
      };


    case 'ADD_CONTACT_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'ADD_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: {},
        contacts: [...state.contacts, action.contact]
      };

    case 'ADD_CONTACT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case 'DELETE_CONTACT_REQUEST':
      return {
        ...state,
        toDelete: action.contact,
        isLoading: true
      };

    case 'DELETE_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        toDelete: {},
        contacts: state.contacts.filter(contact => contact.id !== action.contact.id),
        error: {}
      };

    case 'DELETE_CONTACT_FAILURE':
      return {
        ...state,
        isLoading: false,
        toDelete: {},
        error: action.error
      };

    case 'FETCH_CONTACT_REQUEST':
      return {
        ...state,
        isLoading: true,
        contact: {}
      };

    case 'FETCH_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        contact: action.contact,
        error: {}
      };

    case 'FETCH_CONTACT_FAILURE':
      return {
        ...state,
        isLoading: false,
        contact: {},
        error: action.error
      };

    case 'UPDATE_CONTACT_REQUEST':
      return {
        ...state,
        isLoading: true
      };

    case 'UPDATE_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        contacts: state.contacts.map(contact => contact.id === action.contact.id ? action.contact : contact),
        error: {}
      };

    case 'UPDATE_CONTACT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}