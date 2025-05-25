import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { UniversalProvider } from './components/context/UniversalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UniversalProvider>
      <App />
    </UniversalProvider>
  </StrictMode>,
)
