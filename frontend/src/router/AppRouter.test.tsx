import { screen } from '@testing-library/react';
import React from 'react';

import { Paths } from '@/utils/constants';
import { renderWithProviders } from '@/utils/helpers/renderWithProviders';

import { renderRoutes } from './AppRouter';
import { RouterConfig } from './types';

const MockComponent = () => <div>Mock Component</div>;
const LazyComponent = React.lazy(() => import('@/pages/HomePage'));

const config: RouterConfig[] = [
  {
    path: Paths.HOME,
    exact: true,
    component: MockComponent,
  },
];

const configWithLazy: RouterConfig[] = [
  {
    path: Paths.HOME,
    exact: true,
    component: LazyComponent,
  },
];

//TODO: Test for render nested routes

describe('renderRoutes', () => {
  test('Should renders routes correctly', () => {
    renderWithProviders(renderRoutes(config));

    expect(screen.getByText('Mock Component')).toBeInTheDocument();
  });

  test.todo('Should renders routes with nested routes correctly');

  test('Should renders Suspense fallback', () => {
    renderWithProviders(renderRoutes(configWithLazy));

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
