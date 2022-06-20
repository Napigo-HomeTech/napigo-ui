import React, { ReactElement, useMemo } from 'react';

const ButtonColorClassMap = {
  base: 'border-tranparent hover:bg-primary',
  primary: 'btn-primary text-primary-content',
  secondary: 'btn-secondary text-secondary-content',
  accent: 'btn-accent text-accent-content',
  info: 'btn-info text-info-content',
  warning: 'btn-warning text-warning-content',
  success: 'btn-success text-success-content',
  error: 'btn-error text-error-content',
  ghost: 'btn-ghost',
  'ghost-primary': 'btn-ghost text-primary active:border-primary',
  'ghost-secondary': 'btn-ghost text-secondary active:border-secondary',
  'ghost-accent': 'btn-ghost text-accent active:border-accent',
  'ghost-success': 'btn-ghost text-success active:border-success',
  'ghost-info': 'btn-ghost text-info active:border-info',
  'ghost-warning': 'btn-ghost text-warning active:border-warning',
  'ghost-error': 'btn-ghost text-error active:border-error',
};
const ButtonSizeClassMap = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};
type Sizing = 'sm' | 'md' | 'lg';
type IconPosition = 'left' | 'right';

type Color =
  | 'base'
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'ghost-primary'
  | 'ghost-secondary'
  | 'ghost-accent'
  | 'ghost-success'
  | 'ghost-info'
  | 'ghost-warning'
  | 'ghost-error';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: Sizing;
  color?: Color;
  outline?: boolean;
  renderIcon?: () => JSX.Element | ReactElement;
  iconPosition?: IconPosition;
  square?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    size = 'md',
    color = 'primary',
    outline = false,
    renderIcon = () => {},
    iconPosition = 'left',
    square = false,
    className,
    ...buttonProps
  } = props;

  const classes = useMemo(() => {
    return `btn ${square ? 'btn-square' : ''} gap-2 ${
      outline ? 'btn-outline' : ''
    } ${ButtonSizeClassMap[size]} ${ButtonColorClassMap[color]}`;
  }, [size, color, outline]);

  return (
    <button {...buttonProps} className={classes}>
      <>
        {iconPosition === 'left' && renderIcon()}
        {text}
        {iconPosition === 'right' && renderIcon()}
      </>
    </button>
  );
};
