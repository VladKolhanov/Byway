import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from '@/configs/router/AppRouter';
import { ThemeProvider } from '@/providers/ThemeProvider';

import './styles/global.css';

//TODO: storybook: create Styleguide

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>,
);
