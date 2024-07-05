import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icons, Paths } from '@/utils/constants';
import { cn } from '@/utils/helpers';

import { Icon } from '../Icon';
import css from './Button.module.css';
import { Sizes, Variants } from './types';

interface Props {
  label: string | number;
  className?: string;
  href?: Paths | string;
  variant?: Variants;
  size?: Sizes;
  iconEnd?: Icons;
  iconStart?: Icons;
}

export const Button: FC<Props> = ({
  label,
  className,
  href,
  size = 'md',
  variant = 'primary-6',
  iconEnd,
  iconStart,
  ...props
}) => {
  const classes = cn(
    css.button,
    css[`button_size_${size}`],
    css[`button_variant_${variant}`],
    className,
  );

  const content = () => (
    <>
      {iconStart && <Icon icon={iconStart} />}
      {label}
      {iconEnd && <Icon icon={iconEnd} />}
    </>
  );

  return href ? (
    <Link {...props} to={href} className={classes}>
      {content()}
    </Link>
  ) : (
    <button {...props} className={classes}>
      {content()}
    </button>
  );
};
