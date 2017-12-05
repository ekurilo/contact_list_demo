export default (state = {contacts: [], isLoading: false, error: {}}, action) => {
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
    default:
      return state;
  }
}