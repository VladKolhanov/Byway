import { renderHook } from '@testing-library/react';

import { ThemeContextType } from '@/providers/ThemeProvider/types';
import { Themes } from '@/utils/constants';
import { renderHookWithProviders } from '@/utils/helpers';

import { useTheme } from '../useTheme';

describe('useTheme', () => {
  test('should use theme context value when inside ThemeContext provider', () => {
    const { result } = renderHookWithProviders<ThemeContextType>(useTheme);

    expect(result.current.theme).toBe(Themes.LIGHT);
  });

  test('should throw error when used outside of ThemeContext provider', () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    expect(() => renderHook(useTheme)).toThrow();

    consoleError.mockRestore();
  });
});
