# React Vitest

Proyecto realizado para documentar la preparación del entorno de pruebas al usar React y Typescript.
En este caso se trabajará con Vitest.

## Cómo configurar el ambiente de pruebas con React y Typescript

1. Instalar dependencias.

```
npm install -D vitest jsdom @testing-library/react @testing-library/dom
```

2. Añadir el script para las pruebas en el package.json.

```
{
  "scripts": {
    "test": "vitest"
  }
}
```

3. Crear un archivo `Main.test.ts` en una carpeta tests al mismo nivel de src.

4. Asegurarse de que en el tsconfig.app.json esté incluida la carpeta tests si está por fuera de src.

```
"include": ["src", "tests"]
```

5. La siguiente prueba debería pasar sin problemas, copiar y pegar para probar que todo funcione, luego ejecutar `npm run test`.

```
import { describe, test, expect } from 'vitest';

describe('<App/> Component', () => {
  test('Should pass the test', () => {
    expect(1 + 1).toBe(2);
  });
});
```

6. Configurar el vite.config.ts

- Escribir la siguiente línea al inicio del archivo para habilitar tipado.

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

- Debe haberse asegurado de instalar jsdom en el primer paso, este paquete es necesario ya que por defecto el ambiente de pruebas viene para Node.js, por lo que no tiene las API del navegador, para eso se necesita emular el ambiente del navegador y se hace con este paquete.

- También asegurese de tener instalado los paquetes de React Testing Library y Vitest.

## Documentación

- [Vitest](https://vitest.dev/guide/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
