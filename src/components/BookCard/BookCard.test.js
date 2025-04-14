import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import BookCard from './BookCard'
import { CartProvider } from '../../context/CartContext'
import { FavoritesProvider } from '../../context/FavoritesContext'
import { LocaleProvider } from '../../context/LocaleContext'

const mockBook = {
  id: 1,
  title: 'Мастер и Маргарита',
  author: 'Булгаков',
  price: 1200,
  cover: 'https://placehold.co/200x300?text=Book+1',
}

function renderWithProviders(ui) {
  return render(
    <LocaleProvider>
      <CartProvider>
        <FavoritesProvider>{ui}</FavoritesProvider>
      </CartProvider>
    </LocaleProvider>
  )
}

describe('BookCard', () => {
  test('отображает название, автора и цену', () => {
    renderWithProviders(<BookCard book={mockBook} />)

    expect(screen.getByText(/Мастер и Маргарита/i)).toBeInTheDocument()
    expect(screen.getByText(/Булгаков/i)).toBeInTheDocument()
    expect(screen.getByText(/1200/i)).toBeInTheDocument()
  })

  test('отображает изображение книги', () => {
    renderWithProviders(<BookCard book={mockBook} />)
    const image = screen.getByRole('img', { name: /мастер и маргарита/i })
    expect(image).toHaveAttribute('src', mockBook.cover)
  })

  test('клик по кнопке "в корзину" работает', () => {
    renderWithProviders(<BookCard book={mockBook} />)

    const buttons = screen.getAllByRole('button')
    const cartButton = buttons.find(btn =>
      btn.textContent.toLowerCase().includes('в корзину')
    )

    expect(cartButton).toBeInTheDocument()
    fireEvent.click(cartButton)

    // Тут можно проверить поведение, если появится уведомление или изменится состояние
  })
})
