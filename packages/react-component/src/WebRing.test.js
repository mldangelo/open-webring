import { render, screen } from '@testing-library/react';
import WebRing from './WebRing';

test('renders learn react link', () => {
  render(<WebRing slug="space-potato"/>);
  const linkElement = screen.getByText(/this site is part of the/i);
  expect(linkElement).toBeInTheDocument();
});
