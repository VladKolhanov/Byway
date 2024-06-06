import { createRoot } from 'react-dom/client'

import { App } from '@/App'
import { ThemeProvider } from '@/providers'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
