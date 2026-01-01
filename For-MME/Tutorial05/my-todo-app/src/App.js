import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function App() {
  const [todos, setTodos] = useState([
    { id: generateId(), text: "Learn React", completed: false },
    { id: generateId(), text: "Build a To-Do App", completed: false },
    { id: generateId(), text: "Profit!", completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState("");

  const handleInputChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const addTodo = () => {
    if (newTodoText.trim() !== "") {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: generateId(),
            text: newTodoText,
            completed: false,
          },
        ];
      });
      setNewTodoText(""); // Clear input field after adding
    }
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      {" "}
      {/* Added space for better formatting */}
      <h1>My To-Do List</h1>
      <ul>
        {" "}
        {}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>{" "}
      <input
        type="text"
        value={newTodoText}
        onChange={handleInputChange}
        placeholder="Add a new to-do..."
      />
      <button onClick={addTodo}>Add Todo</button>{" "}
    </div>
  );
}

export default App;
