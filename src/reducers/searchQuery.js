import {
  SET_SEARCH_ALL,
  SET_SEARCH_QUERY,
  SET_SEARCH_PAGE,
  SET_SEARCH_READY
} from '../actions/types';

export const searchQuery = (state = {}, action) => {
  if (action.type === SET_SEARCH_ALL)
    return action.payload;

  if (action.type === SET_SEARCH_QUERY)
    return { ...state, query: action.payload };

  if (action.type === SET_SEARCH_PAGE)
    return { ...state, page: action.payload };

  if (action.type === SET_SEARCH_READY)
    return { ...state, ready: action.payload };

  return state;
};
