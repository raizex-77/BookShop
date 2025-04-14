import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('Footer содержит ссылку на контакт', () => {
  render(<Footer />)
  expect(screen.getByText(/Связаться с нами/i)).toBeInTheDocument()
})
