import type { Preview } from '@storybook/react'
import { Themes } from '@/utils/constants'
import { withStyles } from './decorators/withStyles'
import { withTheme } from './decorators/withTheme'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withStyles, withTheme],
}

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: Themes.LIGHT,
    toolbar: {
      items: [
        { value: Themes.LIGHT, icon: 'sun', title: 'light' },
        { value: Themes.DARK, icon: 'moon', title: 'dark' },
      ],
      dynamicTitle: true,
    },
  },
}

export default preview
