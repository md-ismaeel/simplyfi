// App.js
import React, { useState, useEffect } from 'react';
import ColumnCard from './Components/ColumnCard';
import NewTaskForm from './Components/NewTaskForm';
import data from './data.json';

const App = () => {
  const [tasks, setTasks] = useState({
    'TO_DO': [],
    'Won\'t haves': [],
    'Could haves': [],
    'Must haves': [],
  });

  useEffect(() => {
    // Assign tasks to their corresponding columns
    data.forEach((column) => {
      column.tasks.forEach((taskId) => {
        const task = data.find((item) => item.id === taskId);
        setTasks((prevTasks) => ({
          ...prevTasks,
          [column.title]: [...prevTasks[column.title], task],
        }));
      });
    });
  }, []);

  const handleTaskAdd = (newTask) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      'TO_DO': [...prevTasks['TO_DO'], { title: newTask.title, description: newTask.description }],
    }));
  };

  return (
    <div className="board">
      <h2 className="board__title">Tasks</h2>
      <div className="board__columns">
        {Object.keys(tasks).map((column) => (
          <ColumnCard key={column} columnTitle={column} tasks={tasks[column]} />
        ))}
      </div>
      <NewTaskForm onTaskAdd={handleTaskAdd} />
    </div>
  );
};

export default App;