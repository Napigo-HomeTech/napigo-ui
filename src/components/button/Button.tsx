import React, { useMemo } from 'react';

const ButtonColorClassMap = {
  primary: 'btn-primary text-primary-content',
  secondary: 'btn-secondary text-secondary-content',
  accent: 'btn-accent text-accent-content',
  info: 'btn-info text-info-content',
  warning: 'btn-warning text-warning-content',
  success: 'btn-success text-success-content',
  error: 'btn-error text-error-content',
};
const ButtonSizeClassMap = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};
type Sizing = 'sm' | 'md' | 'lg';
type Color =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: Sizing;
  color?: Color;
  outline?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    size = 'md',
    color = 'primary',
    outline = false,
    className,
    ...buttonProps
  } = props;

  const classes = useMemo(() => {
    return `btn ${outline ? 'btn-outline' : ''} ${ButtonSizeClassMap[size]} ${
      ButtonColorClassMap[color]
    }`;
  }, [size, color, outline]);

  return (
    <button {...buttonProps} className={classes}>
      {text}
    </button>
  );
};
