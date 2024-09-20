import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode> 
       <App/>
       <h1>Voda multification</h1>
     
  </StrictMode>,
)
