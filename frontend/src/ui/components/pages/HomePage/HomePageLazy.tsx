import { lazy } from 'react';

export const HomePageLazy = lazy(() => {
  return import(/* webpackChunkName: "home-page" */ '../HomePage/HomePage');
});
