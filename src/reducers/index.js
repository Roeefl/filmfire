import { combineReducers } from 'redux';

import { searchQuery } from './searchQuery';
import { movies, selectedMovie } from './movies';
import { bucket, seen } from './myLists';

export default combineReducers({
  searchQuery,
  movies,
  selectedMovie,
  bucket,
  seen
});
