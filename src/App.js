import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import Delivery from './pages/Delivery/Delivery';
import Login from './pages/Login/Login';
import VirtualBookList from './components/VirtualBookList/VirtualBookList';
import Profile from './pages/Profile/Profile'; 



import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/top-books" element={<VirtualBookList />} />
          <Route path="/profile" element={<Profile />} />


        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
