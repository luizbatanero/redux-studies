import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './actions';

const App = ({ todos, addTodo }) => (
  <>
    <button type="button" onClick={() => addTodo('Testing')}>
      Add Todo
    </button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  </>
);

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
