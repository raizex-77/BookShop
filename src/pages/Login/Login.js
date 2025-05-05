import { useEffect, useState } from 'react';
import LoginForm from '../../components/AuthForms/LoginForm';
import RegisterForm from '../../components/AuthForms/RegisterForm';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import './Login.css'

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Пользователь вышел");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); 
    });
    return () => unsubscribe();
  }, []);
  

  const toggleForm = (isLogin) => setShowLogin(isLogin);

  if (user) {
    return (
      <div className="auth-success">
        <h2>Вы успешно вошли!</h2>
      </div>
    );

    
  }

  return (
    <div className="auth-wrapper">
      <h1>Добро пожаловать в BookShop</h1>
      {showLogin ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
    </div>
  );
}


export default Login;
