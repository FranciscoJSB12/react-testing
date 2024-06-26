import { cleanup, render } from '@testing-library/react';
import { describe, expect, test, afterEach } from 'vitest';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp/>', () => {
  afterEach(cleanup);

  // test('Debe hacer match con el snapshot', () => {
  //   const { container } = render(<FirstApp title='Hola' />);

  //   expect(container).toMatchSnapshot();
  // });

  test('Debe mostrar el título en un h1', () => {
    const title = 'Hola, Soy Goku';

    const { container, getByText } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toBe(title);
    // expect(h1?.innerHTML).toContain(title);
  });
});
