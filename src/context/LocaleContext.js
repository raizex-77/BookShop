import React, { createContext, useState, useContext } from 'react'

// Создаём сам контекст
const LocaleContext = createContext()

// Провайдер — оборачивает всё приложение
export function LocaleProvider({ children }) {
  const [city, setCity] = useState('Москва')
  const [language, setLanguage] = useState('RU')

  const value = {
    city,
    setCity,
    language,
    setLanguage,
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

// Кастомный хук
export const useLocale = () => useContext(LocaleContext)
