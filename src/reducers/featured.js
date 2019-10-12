import {
  LOAD_FEATURED
} from '../actions/types';

export const featured = (state = [], action) => {
  if (action.type === LOAD_FEATURED)
      return action.payload;

  return state;
};