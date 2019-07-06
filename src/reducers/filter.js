import * as TYPES from '../actions/types';
import filters from '../filters';

export default function(state = filters.ALL, action) {
  switch (action.type) {
    case TYPES.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
