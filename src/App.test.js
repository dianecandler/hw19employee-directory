import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test with header/footer name
// removed Employee Directory from Footer once failed test was successful
test('renders Employee Directory link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Employee Directory/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders without crashing', () => {
  const table = document.createElement('table');
  render(<App />, table);
});