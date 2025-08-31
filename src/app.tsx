import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLibrary from './ComponentLibrary.tsx';
import './app.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComponentLibrary />
  </StrictMode>
);
