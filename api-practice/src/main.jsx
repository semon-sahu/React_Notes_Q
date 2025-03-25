import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Api from './App1.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Api/>

  </StrictMode>,
)
