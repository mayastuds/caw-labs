import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('App Component', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockReturnValue(null);
  });

  test('renders Kanban Board title', () => {
    render(<App />);
    expect(screen.getByText(/Kanban Board/i)).toBeInTheDocument();
  });

  test('renders three columns', () => {
    render(<App />);
    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
});