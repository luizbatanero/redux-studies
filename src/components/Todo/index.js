import React from 'react';
import { connect } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

import { removeTodo, toggleTodo } from '../../actions';
import { TodoItem } from './styles';

const Todo = ({ todo, removeTodo, toggleTodo }) => (
  <TodoItem completed={todo.completed ? 1 : 0}>
    <span onClick={() => toggleTodo(todo.id)}>{todo.title}</span>
    <button type="button" onClick={() => removeTodo(todo.id)}>
      <FaTrashAlt />
    </button>
  </TodoItem>
);

export default connect(
  null,
  {
    removeTodo,
    toggleTodo,
  }
)(Todo);
