import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import './RegisterForm.css';

function RegisterForm({ toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('/avatars/avatar1.png');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: email,
        photoURL: selectedAvatar,
      });

      console.log('Пользователь зарегистрирован с аватаром');
    } catch (error) {
      console.error('Ошибка регистрации:', error.message);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>

        <div className="avatar-selection">
          <h2>Выберите аватар:</h2>
          <div className="avatar-options">
            {['avatar1.png', 'avatar2.png', 'avatar3.png'].map((file) => (
              <img
                key={file}
                src={`/avatars/${file}`}
                alt="avatar"
                className={`avatar-thumb ${selectedAvatar === `/avatars/${file}` ? 'selected' : ''}`}
                onClick={() => setSelectedAvatar(`/avatars/${file}`)}
              />
            ))}
          </div>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Зарегистрироваться</button>
        <p className="switch-link">
          У вас уже есть аккаунт? <span onClick={toggleForm}>Войти</span>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
