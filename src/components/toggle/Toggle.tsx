import React from 'react';

type LabelPosition = 'left' | 'right';

type Color = 'primary' | 'accent' | 'secondary' | 'base';

const ColorClassMap = {
  primary: 'toggle-primary',
  accent: 'toggle-accent',
  secondary: 'toggle-secondary',
  base: 'toggle-base-200',
};

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelPosition?: LabelPosition;
  color?: Color;
}
export const Toggle: React.FC<ToggleProps> = props => {
  const {
    label,
    labelPosition = 'right',
    color = 'base',
    ...inputProps
  } = props;

  return (
    <div className="form-control">
      <label className="cursor-pointer label gap-2">
        {label && labelPosition === 'left' && (
          <span className="label-text">{label}</span>
        )}
        <input
          {...inputProps}
          type="checkbox"
          className={`toggle ${ColorClassMap[color]}`}
        />
        {label && labelPosition === 'right' && (
          <span className="label-text">{label}</span>
        )}
      </label>
    </div>
  );
};
