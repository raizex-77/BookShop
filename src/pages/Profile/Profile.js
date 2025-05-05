import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  return (
    <div className="register-form">
      <h1>Редактировать профиль</h1>
      <button onClick={handleLogout}>Выйти из аккаунта</button>
    </div>
  );
};

export default Profile;
