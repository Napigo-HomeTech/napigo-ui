import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const GroupSizeClassMap = {
  xs: 'input-group-xs',
  sm: 'input-group-sm',
  md: 'input-group-md',
  lg: 'input-group-lg',
};
const InputSizeClassMap = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
};

type Sizing = 'xs' | 'sm' | 'md' | 'lg';

interface CurrencyInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  sizing?: Sizing;
  label?: string;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = props => {
  const { name, label, sizing = 'md', ...inputProps } = props;

  return (
    <div className="form-control">
      {label && (
        <label className="label" htmlFor={name}>
          <span className="label-text">{label}</span>
        </label>
      )}

      <label className={`input-group ${GroupSizeClassMap[sizing]}`}>
        <span className="bg-info-content border-info-content">
          <FaDollarSign />
        </span>
        <input
          {...inputProps}
          id={name}
          type="text"
          className={`input bg-base-200 input-bordered border-transparent flex flex-1 min-w-[50px]
           ${InputSizeClassMap[sizing]}`}
        />
      </label>
    </div>
  );
};
