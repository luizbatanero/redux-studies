import React from 'react';
import { connect } from 'react-redux';

import Todo from '../Todo';
import { Empty } from './styles';

const TodoList = ({ todos }) => {
  if (!todos.length) {
    return <Empty>Nothing to do.</Empty>;
  }

  return (
    <div>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps)(TodoList);
