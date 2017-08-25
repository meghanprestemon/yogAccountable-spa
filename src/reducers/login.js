import { initialState } from './index.js';
import {
  TOGGLE_HIDDEN_MSG
} from '../actions';

export const login = (state = { hideMessage: true }, action) => {
  switch (action.type) {
    case TOGGLE_HIDDEN_MSG:
      const { hideMessage } = action;
      return {...state, hideMessage};
    default:
      return state;
  }
};
