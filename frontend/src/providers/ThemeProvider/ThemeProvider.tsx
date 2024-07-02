import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Themes } from '@/utils/constants';

import {
  THEME_STORAGE_KEY,
  enableThemeTransition,
  getPrefersTheme,
  reflectPreference,
} from './_utils';
import { ThemeContextType, ThemeProviderType } from './types';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({
  children,
  prefersTheme = undefined,
}: ThemeProviderType) => {
  const [theme, setTheme] = useState(() => getPrefersTheme(prefersTheme));

  /** This effect necessary for correct works toggle theme in Storybook */
  useEffect(() => {
    setTheme(getPrefersTheme(prefersTheme));
  }, [prefersTheme]);

  const changeTheme = useCallback(() => {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    enableThemeTransition();
    reflectPreference(newTheme);
    setTheme(newTheme);
  }, [theme]);

  const provideValue = useMemo(
    () => ({ theme, changeTheme }),
    [theme, changeTheme],
  );

  return (
    <ThemeContext.Provider value={provideValue}>
      {children}
    </ThemeContext.Provider>
  );
};
