import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // or './App.css' — whichever you added Tailwind to
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
