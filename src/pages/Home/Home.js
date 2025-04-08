import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdSection from '../../components/AdSection/AdSection';
import useBooks from '../../hooks/useBooks';
import './Home.css';

export default function Home() {
  const { books, loading } = useBooks();
  const navigate = useNavigate();

  const handleAddToCart = (book) => {
    console.log('Добавить в корзину:', book.title);
  };

  const handleToggleFavorite = (book) => {
    console.log('Избранное:', book.title);
  };

  const filterBooks = (type) => books.filter(book => book.type === type);

  if (loading) return <p>Загрузка книг...</p>;

  return (
    <main className="home-page">
      {/* 👇 Кнопка наверху */}
      <div className="top-button-container">
        <button className="top-button" onClick={() => navigate('/top-books')}>
          📚 Смотреть Топ-50 книг
        </button>
      </div>

      <AdSection title="🔥 Новинки" books={filterBooks('new')} />
      <AdSection title="💸 Скидки" books={filterBooks('sale')} />
      <AdSection title="📈 Хиты продаж" books={filterBooks('top')} />
    </main>
  );
}
