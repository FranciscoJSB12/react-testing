import { test, expect, describe, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
  const initialValue = 10;

  afterEach(cleanup);

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el valor inicial de 10', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(10));
  });
});
