import { ReactNode } from 'react'

import { Themes } from '@/utils/constants'

export interface ThemeContextType {
  theme: Themes
  changeTheme: () => void
}

export interface ThemeProviderType {
  children: ReactNode
  prefersTheme?: Themes | undefined
  value?: ThemeContextType
}
