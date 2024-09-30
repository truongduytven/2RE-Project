import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/poppins'
import '@fontsource/volkhov'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Toaster } from 'sonner'
import CartProvider from '@/contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Toaster richColors closeButton/>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
