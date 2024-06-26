import { test, expect, describe, afterEach } from 'vitest';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
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

  test('Debe incrementar con el botón +1', () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText('+1'));

    expect(screen.getByText('11')).toBeTruthy();
  });

  test('Debe decrementar con el botón -1', () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText('-1'));

    expect(screen.getByText('9')).toBeTruthy();
  });

  test('Debe resetear la cuenta', () => {
    render(<CounterApp value={355} />);

    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

    expect(screen.getByText(355)).toBeTruthy();
  });
});
