import React from 'react'
import BookCard from '../BookCard/BookCard'
import './AdSection.css'

function AdSection({ title, books }) {
  return (
    <section className="ad-section">
      <h2>{title}</h2>
      <div className="book-list">
        {books.length === 0 && <p>Нет книг для отображения</p>}
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}

export default AdSection
