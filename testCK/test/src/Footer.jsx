import React from 'react';

const Footer = ({ tasks, deleteAllCompleted, handleFilter }) => {
  const handleClearCompleted = () => {
    deleteAllCompleted();
  };

  return (
    <div className="footer">
      <div className="filters">
        <button onClick={() => handleFilter('All')}>All</button>
        <button onClick={() => handleFilter('Active')}>Active</button>
        <button onClick={() => handleFilter('Complete')}>Complete</button>
      </div>
      <button onClick={handleClearCompleted}>Clear Completed</button>
      <p>{tasks.filter(task => !task.completed).length} items left</p>
    </div>
  );
};

export default Footer;
