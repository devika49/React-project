import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Take a shower", "Eat breakfast"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>To do list</h1>
      <input
        type="text"
        placeholder="Enter a Task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="button" onClick={addTask}>
        Add
      </button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onclick={() => deleteTask(index)}>Delete</button>
            <button onclick={() => moveTaskup(index)}>up</button>
            <button onclick={() => moveTaskdown(index)}>down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
