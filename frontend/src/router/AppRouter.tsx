import { Suspense } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { routerConfig } from './routerConfig';
import { RouterConfig } from './types';

//TODO: create fallback component

export const renderRoutes = (config: RouterConfig[]) =>
  config.map(({ component: Component, path, exact, children }) => (
    <Route
      key={path}
      path={path}
      exact={exact}
      render={(props: RouteComponentProps) => (
        <Suspense fallback={<div>Loading...</div>}>
          <Component {...props} />
          {children && renderRoutes(children)}
        </Suspense>
      )}
    />
  ));

export const AppRouter = () => {
  return <Switch>{renderRoutes(routerConfig)}</Switch>;
};
