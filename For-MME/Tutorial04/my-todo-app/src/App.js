import React from 'react';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      {" "}
      { /* Added space for better formatting */ }
      <h1>My To-Do List</h1>
      <ul>
        {" "}
        <TodoItem />{" "}
        { }
        <TodoItem />{" "}
        { }
        <TodoItem />
      </ul>
    </div>
  );
}

export default App;
