import { renderHook } from '@testing-library/react';

import { ThemeContextType } from '@/providers/ThemeProvider/types';
import { Themes } from '@/utils/constants';
import { renderHookWithProviders } from '@/utils/helpers/renderHookWithProviders';

import { useTheme } from '../useTheme';

describe('useTheme', () => {
  test('should use theme context value when inside ThemeContext provider', () => {
    const { result } = renderHookWithProviders<ThemeContextType>(useTheme);

    expect(result.current.theme).toBe(Themes.LIGHT);
  });

  test('should throw error when used outside of ThemeContext provider', () => {
    expect(() => renderHook(useTheme)).toThrow();
  });
});
