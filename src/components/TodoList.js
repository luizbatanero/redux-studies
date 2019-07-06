import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo todo={todo} />
    ))}
  </ul>
);

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps)(TodoList);
