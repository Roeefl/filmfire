import {
  UPDATE_BUCKET,
  UPDATE_SEEN
} from "./types";

export const updateInBucket = (movie) => {
  return {
    type: UPDATE_BUCKET,
    payload: movie || {}
  };
};

export const addToSeen = (movie) => {
  return {
    type: UPDATE_SEEN,
    payload: movie || {}
  };
};
