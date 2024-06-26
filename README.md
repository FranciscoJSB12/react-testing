# React Vitest

Proyecto realizado para documentar la preparación del entorno de pruebas al usar React y Typescritpt.
En este caso se trabajará con Vitest.

## Cómo figurar el ambiente de pruebas con React y Typescript

1. Instalar vitest.

```
npm install vitest -D
```

2. Añadir el script para las pruebas en el package.json.

```
{
  "scripts": {
    "test": "vitest"
  }
}
```

3. Probar que el ambiente ha sido configurado, cree un archivo, por ejemplo, un App.test.tsx en una carpeta tests al mismo nivel de src.

4. Asegurarse de que en el tsconfig.app.json esté incluida la carpeta tests si está por fuera de src.

```
"include": ["src", "tests"]
```

5. Ejecute el script `npm run test`. La prueba debería pasar sin problemas.

```
import { describe, test, expect } from 'vitest';

describe('<App/> Component', () => {
  test('Should pass the test', () => {
    expect(1 + 1).toBe(2);
  });
});
```

6. Configurar el vite.config.ts

- Escribir la siguiente linea al inicio del archivo para habilitar tipado.

```
/// <reference types="vitest" />
```

- Añadir en el define config la clave test y seleccionar el ambiente como jsdom.

```
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  }
})
```

7. Instalar el modulo jsdom

```
npm install jsdom -D
```

8. Instalar las dependencias para testear componentes de React, en este caso se usará React Testing Library.

```
npm install @testing-library/react @testing-library/dom @types/react @types/react-dom -D
```

## Documentación

- [Vitest](https://vitest.dev/guide/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)