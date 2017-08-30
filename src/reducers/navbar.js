import { initialState } from './index.js';
import {
  TOGGLE_ACTIVE
} from '../actions';

export const navbarActions = (state = { activeItem: 'home' }, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE:
      return {...state, activeItem: action.pageName};
    default:
      return state;
  }
};
