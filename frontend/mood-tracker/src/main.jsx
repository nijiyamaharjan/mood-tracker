import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MoodsContextProvider } from './context/MoodsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoodsContextProvider>
     <App />
    </MoodsContextProvider>
  </StrictMode>,
)
