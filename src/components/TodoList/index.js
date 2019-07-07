import React from 'react';
import { useSelector } from 'react-redux';

import Todo from '../Todo';
import { Empty } from './styles';
import { applyFilter } from '../../filters';

const TodoList = () => {
  const filter = useSelector(state => state.filter);
  const todos = useSelector(state => applyFilter(state.todos, filter));

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

export default TodoList;
