import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ todos }) => {
  if (!todos.length) {
    return <p>Nothing to do.</p>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps)(TodoList);
