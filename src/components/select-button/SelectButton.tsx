import React, { useMemo } from 'react';
import { FaCaretDown } from 'react-icons/fa';

type Option = {
  value: string;
  text: string;
};
interface SelectButtonProps {
  onClick?: (ev: React.MouseEvent) => void;
  selected: Option | null;
  defaultText?: string;
  label?: string;
}
export const SelectButton: React.FC<SelectButtonProps> = (props) => {
  const { selected, defaultText = '-', label } = props;

  const handleClick = (ev: React.MouseEvent<HTMLLabelElement>) => {
    ev.stopPropagation();
    ev.preventDefault();
    props.onClick?.(ev);
  };

  const inputValue = useMemo(() => {
    return selected !== null ? selected.text : defaultText;
  }, [props.selected]);

  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <label className={`input-group cursor-pointer`} onClick={handleClick}>
        <input
          type="text"
          contentEditable={false}
          value={inputValue}
          className={`input bg-base-200 border-transparent cursor-pointer
           focus:outline-none`}
        />
        <span className="bg-base-200">
          <FaCaretDown />
        </span>
      </label>
    </div>
  );
};
