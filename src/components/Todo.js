import React from 'react';
import { connect } from 'react-redux';

import { removeTodo, toggleTodo } from '../actions';

const Todo = ({ todo, removeTodo, toggleTodo }) => (
  <li>
    <span
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.title}
    </span>
    <button type="button" onClick={() => removeTodo(todo.id)}>
      Remove
    </button>
  </li>
);

export default connect(
  null,
  {
    removeTodo,
    toggleTodo,
  }
)(Todo);
