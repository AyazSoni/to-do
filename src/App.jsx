import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "first",
      completed: false,
    },
    {
      id: 2,
      task: "second",
      completed: false,
    },
  ]);

  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // Prevent adding empty tasks
    const newId = todos.length ? todos.slice(-1)[0].id + 1 : 1;
    setTodos([
      ...todos,
      { id: newId, task: input, completed: false },
    ]);
    setInput(""); // Reset input field after adding
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="todo-container">
        <div className="add">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new item"
          className="todo-input"
        />

        <button onClick={handleAdd} className="add-button">Add</button>
      </div>
        <ul className="todo-list">
  {todos.map((todo, index) => (
    <div key={todo.id} className="todo-inside-container">
      <li
        onClick={() => toggleComplete(index)}
        className={`todo-item ${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </li>
      <button
        onClick={(e) => {
          deleteTask(todo.id);
        }}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  ))}
</ul>

      </div>
    </div>
  );
}

export default App;
