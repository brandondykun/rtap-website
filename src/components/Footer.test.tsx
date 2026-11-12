import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

it('Footer has the company, training note and legal links', () => {
  render(<Footer />);
  expect(screen.getByText(/Eratas Software LLC/)).toBeInTheDocument();
  expect(screen.getByText(/Training & simulation only\./)).toBeInTheDocument();
  for (const [name, href] of [['Privacy', '/privacy'], ['Terms', '/terms'], ['Support', '/support']])
    expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
});
