import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleInput = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)  //вызываем функцию из родителя при вводе
  }

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Поиск книг..."
      value={query}
      onChange={handleInput}
    />
  )
}

export default SearchBar
