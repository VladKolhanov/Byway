import { lazy } from 'react';

export const AdminPageLazy = lazy(() => {
  return import(/* webpackChunkName: "admin-page" */ './AdminPage');
});
