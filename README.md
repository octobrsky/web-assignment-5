# Assignment 5 - Simple React Product Dashboard

A modular React application built with Vite demonstrating component decomposition, unidirectional data flow via props, state management using useState, controlled inputs, list rendering, and layout composition using the children prop.

## File Organization
- `src/components/Card.jsx`: Reusable layout component leveraging composition (`children`) to wrap arbitrary child elements with card styling.
- `src/components/Product.jsx`: Stateless presentation component receiving `title` and `price` via props and rendering them inside the `Card` wrapper.
- `src/components/ProductList.jsx`: Encapsulates static product data and maps over items to render `Product` components with unique keys.
- `src/App.jsx`: Root application component managing controlled input state (`name`) and toggle visibility state (`showProducts`) with conditional rendering.
- `src/main.jsx`: Application entry point mounting the root component into the DOM.
- `vite.config.js` & `package.json`: Vite project configuration and dependency management.

## Challenges Faced
- **Controlled Input Handling:** Synchronizing the text field value with React state using `value` and `onChange` without manual DOM manipulation.
- **Component Composition:** Keeping `Card` agnostic of its content by strictly utilizing the `children` prop pattern.
- **Conditional List Rendering:** Toggling the product list display conditionally using boolean state evaluation (`showProducts && <ProductList />`) alongside dynamic button labeling.
