import React, { useRef, useState } from 'react';
import { uniqueId } from 'lodash';
import { FaCaretDown } from 'react-icons/fa';
import ClickAwayListener from '../common/ClickAwayListener';

const activeSelectClassMap = (active: boolean) => {
  return active
    ? 'ring-offset-2 ring-offset-base-100 ring-base-300 ring-2'
    : '';
};
type Option = {
  value: string | number;
  text: string;
};

type SelectProps = {
  label?: string;
  options: Option[];
};

export const Select: React.FC<SelectProps> = props => {
  const { options, label } = props;
  const [selected, setSelected] = useState<Option | null>(null);

  const [open, setOpen] = useState<boolean>(false);

  const itemElements = useRef<any[]>([]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="form-control  w-full max-w-xs">
        {label && (
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        )}

        <div className={`relative cursor-pointer flex flex-row w-full`}>
          <div
            onClick={() => setOpen(!open)}
            className={`
          relative
          input flex-1
          flex
          flex-row
          items-center
          bg-base-200
          border-transparent
          cursor-pointer
          w-full
          focus:outline-none
          active:ring-offset-2
          active:ring-offset-base-100
          active:ring-base-300
          active:ring-2
          focus:ring-offset-2
          focus:ring-offset-base-100
          focus:ring-base-300
          focus:ring-2
          transition-none
          ${activeSelectClassMap(open)}
          `}
          >
            <p className="block truncate">
              {selected === null ? 'Select Option' : selected.text}
            </p>
            <span className="absolute right-[10px] bg-base-200">
              <FaCaretDown />
            </span>
          </div>

          <ul
            className={`absolute ${
              !open ? 'hidden' : ''
            } w-full bg-base-300 rounded shadow-2xl h-[auto] top-[110%] mt-1 overflow-auto max-h-[300px]`}
          >
            {options.map((item: Option, index) => (
              <li
                tabIndex={0}
                key={uniqueId()}
                className={`px-4 py-3 hover:bg-primary hover:text-primary-content focus:bg-primary active:bg-primary`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ClickAwayListener>
  );
};
