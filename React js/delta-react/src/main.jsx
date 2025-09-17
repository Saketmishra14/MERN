import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductList from './ProductList.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <MsgBox name="saket" color="yellow" />
    <MsgBox name="Yash" color="blue" />
    <MsgBox name="Ayush" color="pink" />
    <ProductList/>
    </>
    
  </StrictMode>,
)
