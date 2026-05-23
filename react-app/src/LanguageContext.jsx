import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

// Safe localStorage helpers that handle blocked storage (e.g., Brave browser)
const safeGetItem = (key, defaultValue = null) => {
  try {
    return localStorage.getItem(key) || defaultValue
  } catch (e) {
    console.warn('localStorage is not available:', e.message)
    return defaultValue
  }
}

const safeSetItem = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    console.warn('localStorage is not available:', e.message)
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return safeGetItem('language', 'it')
  })

  useEffect(() => {
    safeSetItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'it' ? 'en' : 'it')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return { language: 'it', toggleLanguage: () => {}, setLanguage: () => {} }
  }
  return context
}
