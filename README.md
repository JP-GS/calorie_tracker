# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


Info del proyecto:

CalorieTracker es un contador de aclorías construído con React + Vite, podemos agregar calorías que consumimos o calorías que quemamos en base a ciertas actividades.
Mediante un simple formulario vamos agregando las actividades divididas en dos categorías, comida y ejercicio. Luego agregamos la cantidad de calorías y finalmente la app calcula la diferencia calórica.
Posee un boton para resetear los datos y comenzar nuevamente al siguiente día, semana, mes, etc...
Las diferentes actividades van listándose en la parte inferior de la pantalla y las estadísticas se muestran en la parte central.
Implementa validación para en el formulario, y todos los datos se almacenan en localStorage.
Utiliza las cuatro acciones del CRUD: Create, Read, Update, Delete

Utilizamos las siguientes tecnologías para su construcción:
React - Vite - TypeScript - TailwindCss 

Hooks: useState, useEffect, useMemo, useReducer

