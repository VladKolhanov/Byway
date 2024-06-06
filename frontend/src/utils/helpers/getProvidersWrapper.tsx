import { ReactNode } from 'react'

import { ThemeProvider } from '@/providers'
import { Themes } from '../constants'

export const getProvidersWrapper = (theme: Themes) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider prefersTheme={theme}>{children}</ThemeProvider>
  )

  return Wrapper
}
