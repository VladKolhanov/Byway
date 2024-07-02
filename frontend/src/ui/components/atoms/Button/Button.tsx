import { FC } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/utils/helpers';

import css from './Button.module.css';
import { Props } from './types';

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
      {iconStart && iconStart}
      {label}
      {iconEnd && iconEnd}
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
