import React from 'react';

type Variant = 'square' | 'circle';

type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | 'inherit';

type RingColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'base'
  | 'warning'
  | 'info'
  | 'success'
  | 'error';

const variantClassMap = {
  square: 'rounded',
  circle: 'rounded-full',
};

const sizeClassMap = {
  xs: 'w-8 h-8',
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
  xl: 'w-28 h-28',
  '2xl': 'w-32 h-32',
  '3xl': 'w-36 h-36',
  '4xl': 'w-40 h-40',
  inherit: 'w-inherit h-inherit',
};

const ringColorClassMap = {
  primary: 'ring-primary',
  secondary: 'ring-secondary',
  accent: 'ring-accent',
  success: 'ring-success',
  warning: 'ring-warning',
  info: 'ring-info',
  error: 'ring-error',
  base: 'ring-base-200',
};

const activeRingColorMap = {
  primary: 'active:ring-primary',
  secondary: 'active:ring-secondary',
  accent: 'active:ring-accent',
  success: 'active:ring-success',
  warning: 'active:ring-warning',
  info: 'active:ring-info',
  error: 'active:ring-error',
  base: 'active:ring-base-200',
};

interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  ringColor?: RingColor;
  active?: boolean;
}
export const AvatarButton: React.FC<AvatarProps> = props => {
  const {
    variant = 'circle',
    size = 'md',
    ringColor = 'base',
    active = true,
    ...buttonProps
  } = props;

  return (
    <button {...buttonProps} className="btn border-transparent avatar">
      <div
        className={`${sizeClassMap[size]} ${
          variantClassMap[variant]
        } ring ring-offset-base-100 ring-offset-2
         hover:${active ? ringColorClassMap[ringColor] : 'ring-base-300'} ${
          activeRingColorMap[ringColor]
        } ${active ? ringColorClassMap[ringColor] : 'ring-base-200'}`}
      >
        <img src="https://api.lorem.space/image/face?hash=92048" />
      </div>
    </button>
  );
};
