import type { Preview } from '@storybook/react';

import { Themes } from '@/utils/constants';

import { withRoutes } from './decorators/withRoutes';
import { withStyles } from './decorators/withStyles';
import { withTheme } from './decorators/withTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withStyles, withRoutes, withTheme],
};

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
};

export default preview;
