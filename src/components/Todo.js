import React from 'react';
import { connect } from 'react-redux';

import { removeTodo } from '../actions';

const Todo = ({ todo, removeTodo }) => (
  <li key={todo.id}>
    <span>{todo.title}</span>
    <button type="button" onClick={() => removeTodo(todo.id)}>
      Remove
    </button>
  </li>
);

export default connect(
  null,
  { removeTodo }
)(Todo);
