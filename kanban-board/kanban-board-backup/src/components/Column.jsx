import React from 'react';
import TaskCard from './TaskCard';

function Column({ 
  title, 
  color, 
  tasks, 
  onDeleteTask, 
  onEditTask,
  onDragStart,
  onDrop,
  columnId 
}) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(columnId);
  };

  const getColumnIcon = () => {
    switch(columnId) {
      case 'todo': return '📝';
      case 'inProgress': return '⚡';
      case 'done': return '✅';
      default: return '📋';
    }
  };

  return (
    <div 
      className="column"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ borderTopColor: color }}
    >
      <div className="column-header">
        <div className="column-title" style={{ color }}>
          <span className="column-icon">{getColumnIcon()}</span>
          {title}
        </div>
        <span className="task-count">{tasks.length}</span>
      </div>
      
      <div className="column-content">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks here yet</p>
            <small>Drag tasks here or create new ones</small>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDeleteTask}
              onEdit={onEditTask}
              onDragStart={() => onDragStart(task)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Column;