import React from 'react';

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
