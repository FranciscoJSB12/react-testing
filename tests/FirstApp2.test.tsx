import { describe, expect, test, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp/>', () => {
  const title = 'Hola, Soy Goku';
  const subTitle = 'Soy un subtitulo';

  afterEach(cleanup);

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('debe mostrar el mensaje "Hola, Soy Goku"', () => {
    render(<FirstApp title={title} />);
    //screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe mostrar el mensaje "Hola, Soy Goku"', () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test('debe mostrar el mensaje "Hola, Soy Goku"', () => {
    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});

// import { cleanup, render } from '@testing-library/react';
// import { describe, expect, test, afterEach } from 'vitest';
// import { FirstApp } from '../src/FirstApp';

// describe('Pruebas en <FirstApp/>', () => {
//   afterEach(cleanup);

//   test('Debe hacer match con el snapshot', () => {
//     const { container } = render(<FirstApp title='Hola' />);

//     expect(container).toMatchSnapshot();
//   });

//   test('Debe mostrar el título en un h1', () => {
//     const title = 'Hola, Soy Goku';

//     const { getByText, getByTestId } = render(<FirstApp title={title} />);
//     expect(getByText(title)).toBeTruthy();

//     expect(getByTestId('test-title').innerHTML).toBe(title);

//     const h1 = container.querySelector('h1');
//     expect(h1?.innerHTML).toBe(title);
//     expect(h1?.innerHTML).toContain(title);
//   });

//   test('Debe mostrar el título en un h1', () => {
//     const title = 'Hola, Soy Goku';
//     const subTitle = 'Soy un subtitulooo';

//     const { getAllByText } = render(
//       <FirstApp
//         title={title}
//         subTitle={subTitle}
//       />
//     );

//     expect(getAllByText(subTitle).length).toBe(2);
//   });
// });
