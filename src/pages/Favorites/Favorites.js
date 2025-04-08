import React from 'react';
import './Favorites.css';
import { useFavorites } from '../../context/FavoritesContext';

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>❤️ Избранное</h2>

      {favorites.length === 0 ? (
        <p>У вас нет избранных книг.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map(book => (
            <li key={book.id} className="favorite-item">
              <img src={book.cover} alt={book.title} className="favorite-cover" />
              <div>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <p>{book.price} ₸</p>
                <button onClick={() => toggleFavorite(book)}>
                  💔 Удалить из избранного
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
