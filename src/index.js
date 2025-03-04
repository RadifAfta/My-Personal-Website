import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Pastikan ini diimpor

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);