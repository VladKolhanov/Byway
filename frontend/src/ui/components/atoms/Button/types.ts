import { ReactNode } from 'react';

import { Paths } from '@/utils/constants';

type Sizes = 'full_psm' | 'full_pm' | 'xsm' | 'sm' | 'md' | 'lg';

type Variants =
  | 'primary-1'
  | 'primary-2'
  | 'primary-3'
  | 'primary-4'
  | 'primary-5'
  | 'primary-6'
  | 'primary-7'
  | 'primary-8'
  | 'border-1'
  | 'border-2'
  | 'outline-1'
  | 'outline-2'
  | 'ghost-1'
  | 'ghost-2';

interface Props {
  label: string | number;
  className?: string;
  href?: Paths | string;
  variant?: Variants;
  size?: Sizes;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
}

export { Props };
