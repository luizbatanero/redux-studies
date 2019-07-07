import React from 'react';
import { connect } from 'react-redux';

import Todo from '../Todo';
import { Empty } from './styles';
import { applyFilter } from '../../filters';

const TodoList = ({ todos }) => {
  if (!todos.length) {
    return <Empty>Nothing to see here.</Empty>;
  }

  return (
    <div>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ todos, filter }) => ({
  todos: applyFilter(todos, filter),
});

export default connect(mapStateToProps)(TodoList);
