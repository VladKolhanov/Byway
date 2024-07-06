import { Decorator } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';

export const withRoutes: Decorator = (Story) => (
  <Router initialEntries={['/']}>
    <Story />
  </Router>
);
