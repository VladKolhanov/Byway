import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
import { Themes } from '@/utils/constants'
import { renderWithProviders } from '@/utils/helpers/renderWithProviders'
import { ThemeContext } from './ThemeProvider'
import { THEME_STORAGE_KEY, reflectPreference } from './utils'

const reflectPreferenceMock = jest.fn()
const enableThemeTransitionMock = jest.fn()

jest.mock('./utils', () => ({
  ...jest.requireActual('./utils'),
  reflectPreference: jest.fn(() => reflectPreferenceMock()),
  enableThemeTransition: jest.fn(() => enableThemeTransitionMock()),
}))

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  const TestComponent = () => (
    <ThemeContext.Consumer>
      {(context) => (
        <div>
          <span data-testid="theme">{context?.theme}</span>
          <button onClick={() => context?.changeTheme()}>Change to Dark</button>
        </div>
      )}
    </ThemeContext.Consumer>
  )

  test('should provide default theme from getPrefersTheme', () => {
    renderWithProviders(<TestComponent />)

    expect(screen.getByTestId('theme')).toHaveTextContent(Themes.LIGHT)
  })

  test('should provide default theme from getPrefersTheme if prefersTheme="undefined"', () => {
    renderWithProviders(<TestComponent />, { theme: undefined })

    expect(screen.getByTestId('theme')).toHaveTextContent(Themes.LIGHT)
  })

  test('should change theme and update localStorage', async () => {
    renderWithProviders(<TestComponent />)

    const user = userEvent.setup()

    const changeThemeBtn = screen.getByRole('button')
    await user.click(changeThemeBtn)

    await waitFor(() => {
      const currentTheme = screen.getByTestId('theme')
      expect(currentTheme).toHaveTextContent(Themes.DARK)
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe(Themes.DARK)
    })
  })

  test('should reflect the theme preference', async () => {
    renderWithProviders(<TestComponent />)

    const user = userEvent.setup()

    const changeThemeBtn = screen.getByRole('button')

    await user.click(changeThemeBtn)

    await waitFor(() => {
      expect(reflectPreference).toHaveBeenCalledWith(Themes.DARK)
      expect(enableThemeTransitionMock).toHaveBeenCalledTimes(1)
    })
  })

  test('should set prefers theme if theme was provide in ThemeProvider', () => {
    renderWithProviders(<TestComponent />, { theme: Themes.DARK })

    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })
})
