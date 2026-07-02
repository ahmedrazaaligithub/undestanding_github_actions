import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';

describe('App Component', () => {
  it('renders the application heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /get started with github actions/i,
      })
    ).toBeInTheDocument();
  });
});