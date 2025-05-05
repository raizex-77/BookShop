import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import GenreFilter from '../GenreFilter/GenreFilter';
import { useLocale } from '../../context/LocaleContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';

function Header() {
  const { city, setCity, language, setLanguage } = useLocale();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Пользователь вышел');
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  const handleSearch = (value) => {
    console.log('Ищем:', value);
  };

  const handleGenreSelect = (genre) => {
    console.log('Выбран жанр:', genre);
  };

  return (
    <header className="header">
      <div className="header-left">
      <Link to="/" className="logo">📚 BookShop</Link>
        <SearchBar onSearch={handleSearch} />
        <GenreFilter onSelect={handleGenreSelect} />
      </div>

      <div className="header-right">
        <Link to="/favorites">Избранное</Link>
        <Link to="/delivery">Доставка</Link>
        <Link to="/cart">Корзина</Link>

        {user ? (
          <>
            <img
              src={user.photoURL || '/avatars/avatar1.png'}
              alt="avatar"
              className="avatar"
              onClick={() => navigate('/profile')}
            />
          </>
        ) : (
          <Link to="/login">Войти</Link>
        )}

        <select
          className="city-select"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option>Алматы</option>
          <option>Астана</option>
          <option>Шымкент</option>
        </select>

        <select
          className="lang-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>RU</option>
          <option>EN</option>
          <option>KZ</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
