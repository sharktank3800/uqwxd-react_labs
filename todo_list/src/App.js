import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);

  // Add the handlesubmit code here
  function handlesubmit(e) {
    e.preventDefault();

    let todo = document.getElementById("todoAdd").value;
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.lenght > 0) {
      setTodos([...todos].concat(newTodo));
    } else {
      alert("Enter valid Task");
    }

    document.getElementById("todoAdd").value = "";
  }

  // Add the deleteToDo code here

  // Add the toggleComplete code here

  // Add the submitEdits code here

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" id="todoAdd" />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="todo-text">{todo.text}</div>
          {/* Insert delete button below this line */}
        </div>
      ))}
    </div>
  );
};
export default App;
