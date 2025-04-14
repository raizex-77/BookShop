import React, { createContext, useState, useContext } from 'react'

const LocaleContext = createContext()

export function LocaleProvider({ children }) {
  const [city, setCity] = useState('Алматы')
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

export const useLocale = () => useContext(LocaleContext)
