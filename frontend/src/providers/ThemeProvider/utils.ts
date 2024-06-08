import { Themes } from '@/utils/constants'

export const THEME_STORAGE_KEY = 'theme-preference'

export const reflectPreference = (theme: Themes) => {
  document.documentElement.setAttribute('data-theme', theme)
}

export const enableThemeTransition = () => {
  document.documentElement.setAttribute('data-transition', 'enabled')
}

export const getPrefersTheme = (prefersTheme?: Themes): Themes => {
  const reflectAndReturnTheme = (theme: Themes): Themes => {
    reflectPreference(theme)
    return theme
  }
  
  if (prefersTheme) {
    return reflectAndReturnTheme(prefersTheme)
  }

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Themes | null

  if (savedTheme) {
    return reflectAndReturnTheme(savedTheme)
  }

  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Themes.DARK
    : Themes.LIGHT

  return reflectAndReturnTheme(theme)
}
