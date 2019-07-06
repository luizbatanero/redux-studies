import * as TYPES from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return [...state, action.todo];
    case TYPES.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TYPES.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}
