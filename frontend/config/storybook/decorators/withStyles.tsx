import { Decorator } from '@storybook/react';

import '@/styles/global.css';

export const withStyles: Decorator = (Story) => (
  <div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <Story />
  </div>
);
