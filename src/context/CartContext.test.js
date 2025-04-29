import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { CartProvider, useCart } from './CartContext'

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('добавляет товар в корзину', () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    const book = { id: 1, title: 'Test Book', price: 1000 }

    act(() => {
      result.current.addToCart(book)
    })

    expect(result.current.cartItems).toHaveLength(1)
    expect(result.current.cartItems[0].quantity).toBe(1)
  })

  test('удаляет товар из корзины', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    const book = { id: 2, title: 'Another Book', price: 900 }

    act(() => {
      result.current.addToCart(book)
      result.current.removeFromCart(2)
    })

    expect(result.current.cartItems).toHaveLength(0)
  })

  test('очищает корзину', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    const book = { id: 3, title: 'Clear Book', price: 1200 }

    act(() => {
      result.current.addToCart(book)
      result.current.clearCart()
    })

    expect(result.current.cartItems).toEqual([])
  })

  test('увеличивает количество, если товар уже есть', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    const book = { id: 4, title: 'Repeat Book', price: 1500 }

    act(() => {
      result.current.addToCart(book)
      result.current.addToCart(book)
    })

    expect(result.current.cartItems[0].quantity).toBe(2)
  })
})
