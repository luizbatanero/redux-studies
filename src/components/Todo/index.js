import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

import { removeTodo, toggleTodo } from '../../actions';
import { TodoItem } from './styles';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <TodoItem completed={todo.completed ? 1 : 0}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.title}</span>
      <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>
        <FaTrashAlt />
      </button>
    </TodoItem>
  );
};

export default Todo;
