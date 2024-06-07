import { Themes } from '@/utils/constants'
import {
  THEME_STORAGE_KEY,
  enableThemeTransition,
  getPrefersTheme,
  reflectPreference,
} from './utils'

describe('reflectPreference', () => {
  beforeEach(() => {
    document.documentElement.removeAttribute('data-theme')
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('should set data-theme attribute on documentElement', () => {
    reflectPreference(Themes.DARK)

    expect(document.documentElement.getAttribute('data-theme')).toBe(
      Themes.DARK,
    )
  })
})

describe('getPrefersTheme', () => {
  afterEach(() => {
    localStorage.clear()
  })

  test('should return and apply the saved theme from localStorage', () => {
    localStorage.setItem(THEME_STORAGE_KEY, Themes.DARK)

    const result = getPrefersTheme()

    expect(result).toBe(Themes.DARK)
    expect(document.documentElement.getAttribute('data-theme')).toBe(
      Themes.DARK,
    )
  })

  test('should return and apply dark theme if prefers-color-scheme is dark', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
    }))

    const result = getPrefersTheme()

    expect(result).toBe(Themes.DARK)
    expect(document.documentElement.getAttribute('data-theme')).toBe(
      Themes.DARK,
    )
  })

  test('should return and apply light theme if prefers-color-scheme is not dark', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: light)',
    }))

    const result = getPrefersTheme()

    expect(result).toBe(Themes.LIGHT)
    expect(document.documentElement.getAttribute('data-theme')).toBe(
      Themes.LIGHT,
    )
  })
})

describe('enableThemeTransition', () => {
  test('should add data-transition attribute', () => {
    enableThemeTransition()

    expect(document.documentElement.getAttribute('data-transition')).toBe(
      'enabled',
    )
  })
})
