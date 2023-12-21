import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App basic', () => {
  test('render test', async () => {
    render(<App />);
    screen.getByText('Vite + React');
  });

  test('increase test', async () => {
    render(<App />);

    screen.getByText('count is 0');
    await userEvent.click(screen.getByText(/count is/));
    screen.getByText('count is 1');
  });
});
