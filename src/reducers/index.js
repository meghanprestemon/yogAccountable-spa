import { combineReducers } from 'redux';
import { navbarActions } from './navbar.js';
import { login } from './login.js'

export let initialState = {
  activeItem: 'home',
  hideMessage: true,
  userFirstName: '',
  userId: ''
}

const rootReducer = combineReducers({
  navbarActions,
  login
})

export default rootReducer;
