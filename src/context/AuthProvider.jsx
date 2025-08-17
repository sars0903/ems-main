import React, { createContext, useEffect, useState, useCallback } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  const updateUserData = useCallback((newData) => {
    setUserData(newData)
    localStorage.setItem('employees', JSON.stringify(newData))
  }, [])

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage()
    setUserData(employees)

    // Listen for storage changes from other tabs/windows
    const handleStorageChange = (e) => {
      if (e.key === 'employees') {
        setUserData(JSON.parse(e.newValue))
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <AuthContext.Provider value={[userData, updateUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider