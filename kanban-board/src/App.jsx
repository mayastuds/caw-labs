import { useState, useEffect } from 'react';
import Column from './components/Column';
import TaskForm from './components/TaskForm';
import Header from './components/Header';
import './App.css';

const COLUMNS = [
  { id: 'todo', title: 'To Do', color: '#4f46e5' },
  { id: 'inProgress', title: 'In Progress', color: '#f59e0b' },
  { id: 'done', title: 'Done', color: '#10b981' }
];

const initialTasks = [
  { 
    id: '1', 
    title: 'Plan project structure', 
    description: 'Create component architecture and folder structure',
    status: 'todo',
    createdAt: new Date('2024-01-15'),
    priority: 'high'
  },
  { 
    id: '2', 
    title: 'Design UI components', 
    description: 'Create mockups for all components',
    status: 'inProgress',
    createdAt: new Date('2024-01-16'),
    priority: 'medium'
  },
  { 
    id: '3', 
    title: 'Setup testing environment', 
    description: 'Configure Jest and React Testing Library',
    status: 'done',
    createdAt: new Date('2024-01-14'),
    priority: 'low'
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('kanban-tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [draggedTask, setDraggedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description, priority) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      status: 'todo',
      createdAt: new Date(),
      priority
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDrop = (status) => {
    if (draggedTask) {
      updateTaskStatus(draggedTask.id, status);
      setDraggedTask(null);
    }
  };

  const editTask = (taskId, updates) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, ...updates } : task
    ));
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <TaskForm onAddTask={addTask} />
        
        <div className="kanban-board">
          {COLUMNS.map(column => (
            <Column
              key={column.id}
              title={column.title}
              color={column.color}
              tasks={tasks.filter(task => task.status === column.id)}
              onDeleteTask={deleteTask}
              onEditTask={editTask}
              onDragStart={handleDragStart}
              onDrop={() => handleDrop(column.id)}
              columnId={column.id}
            />
          ))}
        </div>
        
        <div className="stats">
          <div className="stat-card">
            <h3>Total Tasks</h3>
            <p className="stat-number">{tasks.length}</p>
          </div>
          <div className="stat-card">
            <h3>Completed</h3>
            <p className="stat-number">
              {tasks.filter(t => t.status === 'done').length}
            </p>
          </div>
          <div className="stat-card">
            <h3>In Progress</h3>
            <p className="stat-number">
              {tasks.filter(t => t.status === 'inProgress').length}
            </p>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p>Kanban Board &copy; {new Date().getFullYear()} - M1.STIC Project - Prof. Adil Chekati</p>
      </footer>
    </div>
  );
}

export default App;
