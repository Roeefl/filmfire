import {
  SET_MOVIES,
  ADD_MOVIES,
  SELECT_MOVIE
} from '../actions/types';

export const movies = (state = [], action) => {
  if (action.type === SET_MOVIES)
      return action.payload;
      
  if (action.type === ADD_MOVIES)
     return [
       ...state,
       ...action.payload
      ];

  return state;
};

export const selectedMovie = (state = {}, action) => {
  if (action.type === SELECT_MOVIE)
    return action.payload;

  return state;
};
