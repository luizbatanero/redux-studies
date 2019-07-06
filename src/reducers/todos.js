import * as TYPES from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return [...state, action.todo];
    case TYPES.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}
