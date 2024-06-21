import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import FilterButtons from './FilterButtons';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); 

  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') {
      return !task.completed;
    } else if (filter === 'complete') {
      return task.completed;
    } else {
      return true; // 'all' filter
    }
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoForm addTask={addTask} />
      <FilterButtons filter={filter} onFilterChange={handleFilterChange} />
      <TodoList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
      {tasks.some(task => task.completed) && (
        <button onClick={deleteCompletedTasks}>Delete Completed Tasks</button>
      )}
    </div>
  );
};

export default App;
