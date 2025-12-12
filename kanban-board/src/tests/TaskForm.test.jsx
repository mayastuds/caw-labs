import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

describe('TaskForm Component', () => {
  const mockOnAddTask = jest.fn();

  beforeEach(() => {
    mockOnAddTask.mockClear();
  });

  test('renders add task button', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    expect(screen.getByText('+ Add New Task')).toBeInTheDocument();
  });

  test('expands form when clicked', () => {
    render(<TaskForm onAddTask={mockOnAddTask} />);
    fireEvent.click(screen.getByText('+ Add New Task'));
    expect(screen.getByPlaceholderText('Task title')).toBeInTheDocument();
  });
});