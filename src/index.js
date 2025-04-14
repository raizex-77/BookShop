import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LocaleProvider } from './context/LocaleContext'
import { CartProvider } from './context/CartContext'
import { FavoritesProvider } from './context/FavoritesContext' 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <CartProvider>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </CartProvider>
    </FavoritesProvider>
  </React.StrictMode>
)
