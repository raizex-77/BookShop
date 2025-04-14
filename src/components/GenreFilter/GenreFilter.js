import React, { useState } from 'react'
import './GenreFilter.css'


function GenreFilter({ onSelect }) {
  const [genre, setGenre] = useState('')

  const handleChange = (e) => {
    const selected = e.target.value
    setGenre(selected)
    onSelect(selected)
  }

  return (
    <select className="genre-select" value={genre} onChange={handleChange}>
      <option value="">Все жанры</option>
      <option value="fiction">Художественная</option>
      <option value="science">Научная литература</option>
      <option value="fantasy">Фэнтези</option>
      <option value="comics">Комиксы</option>
      <option value="biography">Биография</option>
    </select>
  )
}

export default GenreFilter
