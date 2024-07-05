import sprite from '@public/assets/icons/sprite.svg?url';
import { FC, SVGProps } from 'react';

import { Icons } from '@/utils/constants';
import { cn } from '@/utils/helpers';

import css from './Icon.module.css';

interface Props extends SVGProps<SVGSVGElement> {
  icon: Icons;
  className?: string;
}

export const Icon: FC<Props> = ({ icon, className, ...props }) => {
  return (
    <svg className={cn(css.icon, className)} {...props}>
      <use href={`${sprite}#${icon}`} />
    </svg>
  );
};
