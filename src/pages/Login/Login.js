
import React, { useState } from 'react';
import LoginForm from '../../components/AuthForms/LoginForm';
import RegisterForm from '../../components/AuthForms/RegisterForm';
import './Login.css'

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login-page">
      <h1>Добро пожаловать в BookShop</h1>
      
      {showLogin ? (
        <LoginForm />
      ) : (
        <RegisterForm />
      )}

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Зарегистрироваться" : "Войти"}
      </button>
    </div>
  );
}

export default Login;
