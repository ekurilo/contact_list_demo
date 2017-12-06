import {combineReducers} from 'redux'
import contactReducer from './contacts'
import {reducer as formReducer} from 'redux-form'

export const rootReducer = combineReducers({
  contactStore: contactReducer,
  form: formReducer
});