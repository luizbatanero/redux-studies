import produce from 'immer';

import * as TYPES from '../actions/types';

export default function(state = [], action) {
  return produce(state, draft => {
    let index;
    switch (action.type) {
      case TYPES.ADD_TODO:
        draft.push(action.todo);
        break;
      case TYPES.REMOVE_TODO:
        index = draft.findIndex(todo => todo.id === action.id);
        if (index >= 0) {
          draft.splice(index, 1);
        }
        break;
      case TYPES.TOGGLE_TODO:
        index = draft.findIndex(todo => todo.id === action.id);
        draft[index].completed = !draft[index].completed;
        break;
      default:
    }
  })
}
