import {
  UPDATE_BUCKET,
  UPDATE_BUCKET_MOVIE_FIELD,
  UPDATE_SEEN
} from '../actions/types';

export const bucket = (state = [], action) => {
  if (action.type === UPDATE_BUCKET) {
    const { imdbID } = action.payload;

      const inBucket = state.find(movie => movie.imdbID === imdbID);

      if (inBucket)
        return state.filter( (item, index) => item.imdbID !== imdbID);

      return [...state, action.payload];
  }

  if (action.type === UPDATE_BUCKET_MOVIE_FIELD)
    return state.map((item, index) => {
      const { imdbID, fieldName, text } = action.payload;

      if (item.imdbID !== imdbID)
        return item;

      return {
        ...item,
        [fieldName]: text
      };
    });

    return state;
};

export const seen = (state = [], action) => {
  if (action.type === UPDATE_SEEN) {
    return [...state, action.payload];
  }

  return state;
};
