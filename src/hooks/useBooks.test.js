import { renderHook, waitFor } from '@testing-library/react';
import useBooks from './useBooks'; 

const mockBooks = [
  {
    id: 1,
    title: "Чапаев и Пустота",
    author: "Альбер Камю",
    price: 3432,
    virtualTop: false
  },
  {
    id: 2,
    title: "Посторонний",
    author: "Селинджер",
    price: 2242,
    virtualTop: false
  }
];

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockBooks)
    })
  );
});

describe('useBooks', () => {
  it('загружает книги из JSON', async () => {
    const { result } = renderHook(() => useBooks());

    await waitFor(() => {
      expect(result.current.books.length).toBe(2);
      expect(result.current.books[0].title).toBe('Чапаев и Пустота');
      expect(result.current.loading).toBe(false);
    });
  });
});
