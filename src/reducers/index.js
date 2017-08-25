import { combineReducers } from 'redux';
import { navbarActions } from './navbar.js';
import { login } from './login.js'

export let initialState = {
  activeItem: 'home',
  hideMessage: true
}

const rootReducer = combineReducers({
  navbarActions,
  login
})

export default rootReducer;
