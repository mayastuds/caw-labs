import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, description, priority);
      setTitle('');
      setDescription('');
      setPriority('medium');
      setIsExpanded(false);
    }
  };

  return (
    <div className={`task-form-container ${isExpanded ? 'expanded' : ''}`}>
      <button 
        className="expand-btn"
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
      >
        {isExpanded ? '−' : '+'} Add New Task
      </button>
      
      {isExpanded && (
        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              className="form-input"
              required
              autoFocus
            />
          </div>
          
          <div className="form-group">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (optional)"
              className="form-textarea"
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Priority:</label>
            <div className="priority-selector">
              {['high', 'medium', 'low'].map((level) => (
                <button
                  key={level}
                  type="button"
                  className={`priority-btn ${priority === level ? 'active' : ''}`}
                  style={{
                    backgroundColor: priority === level ? 
                      (level === 'high' ? '#ef4444' : 
                       level === 'medium' ? '#f59e0b' : '#10b981') : '#e5e7eb',
                    color: priority === level ? 'white' : '#374151'
                  }}
                  onClick={() => setPriority(level)}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setIsExpanded(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default TaskForm;