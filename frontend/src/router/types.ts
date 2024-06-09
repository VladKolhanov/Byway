import { ComponentType, LazyExoticComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Paths } from '@/utils/constants';

export interface RouterConfig {
  path: Paths;
  component:
    | LazyExoticComponent<ComponentType<RouteComponentProps>>
    | ComponentType<RouteComponentProps>;
  children?: RouterConfig[];
  exact?: boolean;
}
