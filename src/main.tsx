import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // or './App.css' — whichever you added Tailwind to
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <h1 className="text-3xl font-bold text-purple-500">Tailwind is working!</h1>

  </StrictMode>,
)
