import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // or './App.css' — whichever you added Tailwind to
import './styles/global.css'; // Global styles
import './styles/typography.css'; // Typography styles
import App from './App.tsx';
import { showErrorToast } from './utils/toastUtils';

// Global error handler for uncaught errors
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);

  // Show toast notification for uncaught errors
  showErrorToast(`Uncaught error: ${event.error?.message || 'Unknown error'}`);
});

// Global promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);

  // Show toast notification for unhandled promise rejections
  const message = event.reason?.message || 'Unhandled promise rejection';
  showErrorToast(`Promise error: ${message}`);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
