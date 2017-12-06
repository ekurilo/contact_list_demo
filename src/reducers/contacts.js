export default (state = {contacts: [], contact: {}, isLoading: false, error: {}}, action) => {
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
    default:
      return state;
  }
}