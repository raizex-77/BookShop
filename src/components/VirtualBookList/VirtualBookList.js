import React from 'react';
import { FixedSizeList as List } from 'react-window';
import './VirtualBookList.css';
import useBooks from '../../hooks/useBooks';

function BookRow({ data, index, style }) {
  const book = data[index];
  return (
    <div className="book-row" style={style}>
      <div className="book-info">
        <h4>{book.title}</h4>
        <p>{book.author}</p>
      </div>
      <span className="book-price">{book.price} ₸</span>
    </div>
  );
}

export default function VirtualBookList() {
  const { books, loading } = useBooks(); 
  const topBooks = books.filter(book => book.virtualTop); 


  if (loading) return <p style={{ textAlign: 'center' }}>Загрузка книг...</p>;

  return (
    <div className="virtual-list-container">
      <List
        height={500}
        itemCount={topBooks.length}
        itemSize={80}
        itemData={topBooks}
        width={800}
      >
        {BookRow}
      </List>
    </div>
  );
}
