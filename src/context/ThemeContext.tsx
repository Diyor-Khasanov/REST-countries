import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  const toggleTheme = () => setIsDark(!isDark)

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
