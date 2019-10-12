import { combineReducers } from 'redux';

import { searchQuery } from './searchQuery';
import { movies, selectedMovie } from './movies';
import { bucket, seen } from './myLists';
import { featured } from './featured';

export default combineReducers({
  searchQuery,
  movies,
  featured,
  selectedMovie,
  bucket,
  seen
});
