import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function LoginForm({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Пользователь вошел!');
    } catch (err) {
      setError('Ошибка входа');
    }
  };

  return (
    <form onSubmit={handleLogin} className="register-form">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Войти</button>
      {error && <p className="error">{error}</p>}
      <p>
        У вас нет аккаунта?{' '}
        <span className="auth-link" onClick={() => toggleForm(false)}>Зарегистрироваться</span>
      </p>
    </form>

  );
}

export default LoginForm;
