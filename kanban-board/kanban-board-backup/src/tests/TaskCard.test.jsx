import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '../components/TaskCard';

describe('TaskCard Component', () => {
  const mockTask = {
    id: '1',
    title: 'Test Task',
    description: 'Test Description',
    priority: 'medium',
    createdAt: new Date('2024-01-15'),
    status: 'todo'
  };

  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  beforeEach(() => {
    mockOnDelete.mockClear();
    mockOnEdit.mockClear();
  });

  test('renders task information', () => {
    render(
      <TaskCard 
        task={mockTask} 
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('enters edit mode', () => {
    render(
      <TaskCard 
        task={mockTask} 
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );
    
    fireEvent.click(screen.getByText('✏️'));
    expect(screen.getByDisplayValue('Test Task')).toBeInTheDocument();
  });
});