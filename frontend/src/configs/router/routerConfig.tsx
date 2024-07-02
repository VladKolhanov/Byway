import { AdminPage } from '@/ui/components/pages/AdminPage';
import { HomePage } from '@/ui/components/pages/HomePage';
import { InstructorPage } from '@/ui/components/pages/InstructorPage';
import { NotFoundPage } from '@/ui/components/pages/NotFoundPage';
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
    component: NotFoundPage,
  },
];
