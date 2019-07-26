import {
  SEARCH_RESULTS,
} from './types';

export const searchResults = (results) => {
  return {
    type: SEARCH_RESULTS,
    results,
  }
};
