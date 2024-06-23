import { IconGallery, IconItem } from '@storybook/blocks';

import { Icon as IconExample } from '@/components/ui';
import { Icons } from '@/utils/constants';

import s from './Iconography.module.css';

export const Iconography = () => {
  const iconList = Object.values(Icons).map((icon) => (
    <IconItem key={icon} name={icon}>
      <IconExample className={s.icon} icon={icon} />
    </IconItem>
  ));

  return <IconGallery>{iconList}</IconGallery>;
};
