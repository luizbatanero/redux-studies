import uuid from 'uuid/v1';
import * as TYPES from './types';

export const addTodo = title => ({
  type: TYPES.ADD_TODO,
  todo: {
    id: uuid(),
    title,
    completed: false,
  },
});

export const removeTodo = id => ({
  type: TYPES.REMOVE_TODO,
  id,
});

export const toggleTodo = id => ({
  type: TYPES.TOGGLE_TODO,
  id,
});

export const setFilter = filter => ({
  type: TYPES.SET_FILTER,
  filter,
});
