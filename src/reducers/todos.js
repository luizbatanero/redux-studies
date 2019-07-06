import * as TYPES from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
}
