import { initialState } from './index.js';
import {
  GET_ENTRIES
} from '../actions';

export const entries = (state = { entryData: {}}, action) => {
  switch (action.type) {
    case GET_ENTRIES:
      const { entryData } = action;
      return {...state, entryData};
    default:
      return initialState;
  }
};
