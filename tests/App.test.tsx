import { render, screen } from '@testing-library/react';
import App from "../src/App";

// Testing the setup
describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});


describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });
});