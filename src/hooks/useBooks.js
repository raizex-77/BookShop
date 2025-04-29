import { useState, useEffect } from 'react';

export default function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/books.json')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки books.json:', err);
        setLoading(false);
      });
  }, []);

  return { books, loading };
} 