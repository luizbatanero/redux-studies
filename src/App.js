import React from 'react';

import GlobalStyle from './styles';

import Container from './components/Container';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => (
  <Container>
    <AddTodo />
    <TodoList />
    <GlobalStyle />
  </Container>
);

export default App;
