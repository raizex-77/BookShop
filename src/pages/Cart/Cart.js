import React from 'react';
import './Cart.css';
import { useCart } from '../../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Сумма всех товаров = цена * количество
  const totalPrice = cartItems.reduce(
    (sum, book) => sum + book.price * book.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>🛒 Корзина</h2>

      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((book) => (
              <li key={book.id} className="cart-item">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="cart-cover"
                />
                <div>
                  <h4>{book.title}</h4>
                  <p>{book.author}</p>
                  <p>
                    {book.price} ₸ × {book.quantity} ={' '}
                    <strong>{book.price * book.quantity} ₸</strong>
                  </p>
                  <button onClick={() => removeFromCart(book.id)}>
                    ❌ Удалить
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p>
              Сумма заказа: <strong>{totalPrice} ₸</strong>
            </p>
            <button className="clear-btn" onClick={clearCart}>
              🧹 Очистить корзину
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
