import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('renders circle calculator title', () => {
  render(<App />);
  const linkElement = screen.getByText('Circle Calculator');
  expect(linkElement).toBeInTheDocument();
});
