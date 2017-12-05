import {combineReducers} from 'redux'
import contactReducer from './contacts'

export const rootReducer = combineReducers({
  contactStore: contactReducer
});