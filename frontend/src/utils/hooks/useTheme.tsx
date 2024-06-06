import { useContext } from 'react'

import { ThemeContext } from '@/providers'

export const useTheme = () => {
  const contextValue = useContext(ThemeContext)

  if (!contextValue) {
    throw new Error('Provide theme Provider in your root component')
  }

  return contextValue
}
