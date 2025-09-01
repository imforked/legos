import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ComponentLibrary from './ComponentLibrary.tsx';
import { GlobalStyles } from './app.styles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <ComponentLibrary />
  </StrictMode>
);
