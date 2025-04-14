import React from 'react'
import { render, screen } from '@testing-library/react'
import VirtualBookList from './VirtualBookList'
import { LocaleProvider } from '../../context/LocaleContext'

// Мокаем хук useBooks
jest.mock('../../hooks/useBooks', () => () => ({
  books: [
    {
      id: 1,
      title: 'Книга 1',
      author: 'Автор 1',
      price: 1000,
      virtualTop: true
    }
  ],
  loading: false
}))

function renderWithProviders(ui) {
  return render(<LocaleProvider>{ui}</LocaleProvider>)
}

describe('VirtualBookList', () => {
  test('рендерит список книг', () => {
    renderWithProviders(<VirtualBookList />)
    expect(screen.getByText('Книга 1')).toBeInTheDocument()
    expect(screen.getByText('Автор 1')).toBeInTheDocument()
    expect(screen.getByText(/1000/i)).toBeInTheDocument()
  })
})