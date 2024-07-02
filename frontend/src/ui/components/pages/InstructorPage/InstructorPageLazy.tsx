import { lazy } from 'react';

export const InstructorPageLazy = lazy(() => {
  return import(
    /* webpackChunkName: "instructor-page" */ '../InstructorPage/InstructorPage'
  );
});
