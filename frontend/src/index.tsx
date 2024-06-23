import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/providers';
import { AppRouter } from '@/router/AppRouter';

import './styles/global.css';

//TODO: storybook: create Styleguide

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>,
);
