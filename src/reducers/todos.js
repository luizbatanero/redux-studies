import * as TYPES from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
        },
      ];
    default:
      return state;
  }
}
