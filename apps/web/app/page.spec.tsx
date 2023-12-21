import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page', () => {
  test('renders button', () => {
    render(<Page />);

    screen.getByText('Click me!');
  });
});
