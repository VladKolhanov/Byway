import { Themes } from '@/utils/constants'

export const THEME_STORAGE_KEY = 'theme-preference'

export const reflectPreference = (theme: Themes) => {
  document.documentElement.setAttribute('data-theme', theme)

  document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme)
}

export const getPrefersTheme = (prefersTheme?: Themes) => {
  if (prefersTheme) {
    reflectPreference(prefersTheme)
    return prefersTheme
  }

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Themes

  if (savedTheme) {
    reflectPreference(savedTheme)
    return savedTheme
  }

  const isPrefersDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches

  const theme = isPrefersDarkTheme ? Themes.DARK : Themes.LIGHT

  reflectPreference(theme)

  return theme
}

export const enableThemeTransition = () => {
  document.documentElement.setAttribute('data-transition', 'enabled')
}
