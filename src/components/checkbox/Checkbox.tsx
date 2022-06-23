import React from 'react';

type LabelPosition = 'left' | 'right';

type Color = 'primary' | 'accent' | 'secondary' | 'base';

const ColorClassMap = {
  primary: 'checkbox-primary',
  accent: 'checkbox-accent',
  secondary: 'checkbox-secondary',
  base: 'checkbox-base-200',
};

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelPosition?: LabelPosition;
  color?: Color;
}
export const Checkbox: React.FC<CheckboxProps> = props => {
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
          className={`checkbox ${ColorClassMap[color]}`}
        />
        {label && labelPosition === 'right' && (
          <span className="label-text">{label}</span>
        )}
      </label>
    </div>
  );
};
