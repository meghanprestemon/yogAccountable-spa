import { initialState } from './index.js';
import {
  TOGGLE_HIDDEN_MSG,
  LOGIN_SUCCESS
} from '../actions';

export const login = (state = {
  hideMessage: true,
  userFirstName: '',
  userId: '',
  redirectToEntries: false
 }, action) => {
  switch (action.type) {
    case TOGGLE_HIDDEN_MSG:
      const { hideMessage } = action;
      return {...state, hideMessage};
    case LOGIN_SUCCESS:
      const { userFirstName, userId, redirectToEntries } = action;
      localStorage.setItem('userId', userId);
      return {
        ...state,
        userFirstName,
        userId,
        redirectToEntries
      }
    default:
      return initialState;
  }
};
