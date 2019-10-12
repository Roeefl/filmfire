import {
  SET_SEARCH_ALL,
  SET_SEARCH_PAGE,
  SET_SEARCH_READY,
  SET_MOVIES,
  ADD_MOVIES,
  SELECT_MOVIE,
  UPDATE_BUCKET_MOVIE_FIELD,
  LOAD_FEATURED
} from "./types";

import {
  BASE_URL,
  API_KEY,
  FULL_PLOT,
  TYPE_MOVIE
} from '../lib/omdb';

import { FEATURED } from '../lib/featured';

import { MAX_SCROLL_PAGE } from '../lib/settings';

export const loadMore = () =>
  async (dispatch, getState) => {
    try {
      const currState = getState();
      const { query, page } = currState.searchQuery;

      const nextPage = page+1;
      if (nextPage > MAX_SCROLL_PAGE)
        return;

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
        payload: { query, page: 1, ready: false, type: TYPE_MOVIE } || {}
      });

      dispatch({
        type: SET_MOVIES,
        payload: false
      });

      const results = await fetch(`${BASE_URL}?${API_KEY}&s=${query}&${TYPE_MOVIE}&page=1`);
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

      history.push('/movies');
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

export const fetchMovieData = (imdbID) =>
  async (dispatch, getState) => {
    try {
      const currState = getState();

      const currQueryType = currState.searchQuery.type;

      const inBucket = currState.bucket.find(movie => movie.imdbID === imdbID );
      
      if (inBucket) {
        dispatch({
          type: SELECT_MOVIE,
          payload: inBucket || {}
        });

        return;
      }

      const results = await fetch(`${BASE_URL}?${API_KEY}&i=${imdbID}&${FULL_PLOT}&${currQueryType}`);
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

  export const loadFeatured = () =>
  async (dispatch) => {
    try {
      const featured = [];

      let result = {};
      let movieData = {};

      for (let imdbID of FEATURED) {
        result = await fetch(`${BASE_URL}?${API_KEY}&i=${imdbID}`);
        movieData = await result.json();
        featured.push(movieData);
      }

      dispatch({
        type: LOAD_FEATURED,
        payload: featured || []
      });
    } catch (error) {
      console.log('loadFeatured failed with error: ' + error);
    }
  };
