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
import { FavoriteProvider } from './contexts/FavoriteContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <CartProvider>
          <Toaster richColors />
          <App />
        </CartProvider>
      </FavoriteProvider>
    </BrowserRouter>
  </React.StrictMode>
)
