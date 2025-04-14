import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { LocaleProvider } from './context/LocaleContext'

test('renders App and header content', () => {
  render(
    <LocaleProvider>
      <App />
    </LocaleProvider>
  )

  expect(screen.getByText(/BookShop/i)).toBeInTheDocument()
})
