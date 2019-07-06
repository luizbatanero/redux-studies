import uuid from 'uuid/v1';
import * as TYPES from './types';

export const addTodo = title => ({
  type: TYPES.ADD_TODO,
  todo: {
    id: uuid(),
    title,
  },
});
