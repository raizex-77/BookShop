import React from 'react'
import './BookCard.css'
import { useCart } from '../../context/CartContext'
import { useFavorites } from '../../context/FavoritesContext'

function BookCard({ book }) {
  const { addToCart } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} className="book-cover" />
      <h3>{book.title}</h3>
      <p>Автор: {book.author}</p>
      <p>Цена: {book.price} ₸</p>

      <div className="book-actions">
        <button onClick={() => toggleFavorite(book)}>
          {isFavorite(book.id) ? '💔 Убрать' : '❤️ В избранное'}
        </button>
        <button onClick={() => addToCart(book)}>🛒 В корзину</button>
      </div>
    </div>
  )
}

export default BookCard
