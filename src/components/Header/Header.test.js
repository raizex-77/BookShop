import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { LocaleProvider } from '../../context/LocaleContext'
import { BrowserRouter } from 'react-router-dom'

test('Header рендерит логотип', () => {
  render(
    <BrowserRouter>
      <LocaleProvider>
        <Header />
      </LocaleProvider>
    </BrowserRouter>
  )

  expect(screen.getByText(/BookShop/i)).toBeInTheDocument()
})
