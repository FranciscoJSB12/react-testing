import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './App.tsx';
import { FirstApp } from './FirstApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirstApp title='Hola' />
  </React.StrictMode>
);
