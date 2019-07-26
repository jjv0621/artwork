import {
  SEARCH_RESULTS,
} from './types';

const results = (state = [], action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.results;
    default:
      return state
  }
};

export default results;
