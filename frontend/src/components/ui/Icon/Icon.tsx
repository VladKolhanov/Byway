import sprite from '@public/assets/icons/sprite.svg?url';
import { FC, SVGProps } from 'react';

import { Icons } from '@/utils/constants';

interface Props extends SVGProps<SVGSVGElement> {
  icon: Icons;
  className?: string;
}

export const Icon: FC<Props> = ({ icon, className, ...props }) => {
  return (
    <svg className={className} {...props}>
      <use href={`${sprite}#${icon}`} />
    </svg>
  );
};
