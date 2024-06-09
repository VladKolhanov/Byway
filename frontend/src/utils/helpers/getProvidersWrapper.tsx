import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '@/providers';

import { Themes } from '../constants';

export const getProvidersWrapper = (theme: Themes | undefined) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider prefersTheme={theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );

  return Wrapper;
};
