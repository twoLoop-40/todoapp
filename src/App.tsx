import React from 'react';
import { GlobalStyle } from './styles/globalStyle';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
