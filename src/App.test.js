// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainGrid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainGrid/i);
    expect(titleElement).toBeInTheDocument();
});
