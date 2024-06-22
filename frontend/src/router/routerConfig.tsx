import { AdminPage, HomePage, InstructorPage, Page404 } from '@/pages';
import { Paths } from '@/utils/constants';

import { RouterConfig } from './types';

export const routerConfig: RouterConfig[] = [
  {
    path: Paths.HOME,
    exact: true,
    component: HomePage,
  },
  {
    path: Paths.INSTRUCTOR_DASHBOARD,
    exact: true,
    component: InstructorPage,
  },
  {
    path: Paths.ADMIN_MAIN,
    exact: true,
    component: AdminPage,
  },
  {
    path: Paths.NOT_FOUND_404,
    component: Page404,
  },
];
