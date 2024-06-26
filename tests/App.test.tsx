import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { App } from '../src/App';

describe('<App/> Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  test('Should render title all the time', () => {
    expect(screen.getByText('Title')).toBeDefined();
  });

  test('Should not render content', () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test('Should render content when button is clicked', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(button.textContent).toBe('Close');
    expect(screen.queryByText(/content/i)).toBeDefined();
  });
});
