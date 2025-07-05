import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(['Buy milk', 'Study React']);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks(prev => [...prev, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

export default App;
