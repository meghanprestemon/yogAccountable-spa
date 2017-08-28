import { combineReducers } from 'redux';
import { navbarActions } from './navbar.js';
import { login } from './login.js'
import { entries } from './entries.js'

export let initialState = {
  activeItem: 'home',
  hideMessage: true,
  userFirstName: '',
  userId: '',
  redirectToEntries: false,
  entryData: []
}

const rootReducer = combineReducers({
  navbarActions,
  login,
  entries
})

export default rootReducer;
