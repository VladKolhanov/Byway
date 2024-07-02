import { Decorator } from '@storybook/react';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { Themes } from '@/utils/constants';

export const withTheme: Decorator = (Story, context) => {
  const prefersTheme: Themes = context.globals.theme || Themes.LIGHT;

  return (
    <ThemeProvider prefersTheme={prefersTheme}>
      <Story />
    </ThemeProvider>
  );
};
