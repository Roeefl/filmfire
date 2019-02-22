import {
  SET_SEARCH_ALL,
  SET_SEARCH_PAGE,
  SET_SEARCH_READY,
  SET_MOVIES,
  ADD_MOVIES,
  SELECT_MOVIE,
  UPDATE_BUCKET_MOVIE_FIELD
} from "./types";

import {
  BASE_URL,
  API_KEY,
  FULL_PLOT
} from '../lib/omdb';

export const loadMoreMovies = (query, currentPage) =>
  async (dispatch) => {
    try {
      const nextPage = currentPage + 1;

      dispatch({
        type: SET_SEARCH_PAGE,
        payload: nextPage
      });

      dispatch({
        type: SET_SEARCH_READY,
        payload: false
      });

      const results = await fetch(`${BASE_URL}?${API_KEY}&s=${query}&page=${nextPage}`);
      const data = await results.json();
      const { Search } = data;

      dispatch({
        type: ADD_MOVIES,
        payload: Search || []
      });

      dispatch({
        type: SET_SEARCH_READY,
        payload: true
      });
    } catch (error) {
      console.log('loadMoreMovies failed with error: ' + error);
    }
  };

export const searchMovies = (query, history) => 
  async (dispatch) => {
    try {
      dispatch({
        type: SET_SEARCH_ALL,
        payload: { query, page: 1, ready: false } || {}
      });

      dispatch({
        type: SET_MOVIES,
        payload: false
      });

      const results = await fetch(`${BASE_URL}?${API_KEY}&s=${query}&page=1`);
      const data = await results.json();
      const { Search } = data;

      dispatch({
        type: SET_MOVIES,
        payload: Search || []
      });

      dispatch({
        type: SET_SEARCH_READY,
        payload: true
      });

      history.push('/');
    } catch (error) {
      console.log('searchMovies failed with error: ' + error);
    }
  };

export const selectMovie = (movie) => {
  return {
    type: SELECT_MOVIE,
    payload: movie || {}
  }
};

export const updateBucketMovieField = (bucket, imdbID, fieldName, text) => {
  return {
    type: UPDATE_BUCKET_MOVIE_FIELD,
    payload: { imdbID: imdbID, fieldName, text } || {}
  }
};

export const fetchMovieData = (imdbID, bucket) =>
  async (dispatch) => {
    try {
      const inBucket = bucket.find(movie => movie.imdbID === imdbID );
      
      if (inBucket) {
        dispatch({
          type: SELECT_MOVIE,
          payload: inBucket || {}
        });

        return;
      }

      const results = await fetch(`${BASE_URL}?${API_KEY}&i=${imdbID}&${FULL_PLOT}`);
      const movieData = await results.json();

      dispatch({
        type: SELECT_MOVIE,
        payload: movieData || {}
      });
    }
    catch (error) {
      console.log('fetchMovieData failed with error: ' + error);
    }
  };


  