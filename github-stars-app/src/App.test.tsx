import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the hooks and components
jest.mock('./hooks/useGitHubRepos', () => ({
  __esModule: true,
  default: () => ({
    repos: [],
    loading: false,
    error: null,
    loadMore: jest.fn()
  })
}));

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Most Starred GitHub Repositories/i);
  expect(titleElement).toBeInTheDocument();
});