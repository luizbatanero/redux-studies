import * as TYPES from './types';

export const addTodo = title => ({
  type: TYPES.ADD_TODO,
  title,
});
