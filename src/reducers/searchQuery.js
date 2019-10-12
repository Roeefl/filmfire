import {
  SET_SEARCH_ALL,
  SET_SEARCH_QUERY,
  SET_SEARCH_PAGE,
  SET_SEARCH_READY,
  SET_SEARCH_TYPE
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

  if (action.type === SET_SEARCH_TYPE)
    return { ...state, type: action.payload };

  return state;
};
