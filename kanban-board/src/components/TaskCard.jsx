import { useState } from 'react';

function TaskCard({ task, onDelete, onEdit, onDragStart }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const priorityColors = {
    high: '#ef4444',
    medium: '#f59e0b',
    low: '#10b981'
  };

  const handleSave = () => {
    onEdit(task.id, {
      title: editedTitle,
      description: editedDescription
    });
    setIsEditing(false);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
    onDragStart();
  };

  return (
    <div 
      className="task-card"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <div className="task-header">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="edit-input"
            autoFocus
          />
        ) : (
          <h4 className="task-title">{task.title}</h4>
        )}
        
        <div className="task-actions">
          <button 
            className="icon-btn"
            onClick={() => setIsEditing(!isEditing)}
            title={isEditing ? 'Cancel' : 'Edit'}
            type="button"
          >
            {isEditing ? '×' : '✎'}
          </button>
          <button 
            className="icon-btn"
            onClick={() => {
              if (window.confirm('Delete this task?')) {
                onDelete(task.id);
              }
            }}
            title="Delete"
            type="button"
          >
            🗑
          </button>
        </div>
      </div>
      
      <div className="task-body">
        {isEditing ? (
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="edit-textarea"
            rows="2"
          />
        ) : (
          <p className="task-description">{task.description}</p>
        )}
      </div>
      
      <div className="task-footer">
        <div className="task-meta">
          <span 
            className="priority-badge"
            style={{ backgroundColor: priorityColors[task.priority] }}
          >
            {task.priority}
          </span>
          <span className="task-date">
            {formatDate(task.createdAt)}
          </span>
        </div>
        
        {isEditing && (
          <button 
            className="btn btn-small btn-primary"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
