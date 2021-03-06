import React, { useCallback, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Button } from '../button/Button';
import ClickAwayListener from '../common/ClickAwayListener';

type Option = {
  value: string;
  text: string;
};

interface InputSelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  defaultSelected: Option;
  onSelectChange?: (value: Option) => void;
  label?: string;
  editable?: boolean;
}
export const InputSelect: React.FC<InputSelectProps> = props => {
  const {
    options,
    defaultSelected,
    onSelectChange,
    label,
    editable = true,
    ...inputProps
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option>(defaultSelected);

  useCallback(() => {
    onSelectChange?.(selected);
  }, [selected]);

  return (
    <div className={`${editable ? '' : 'pointer-events-none'}`}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div className="relative w-full">
          <div className="form-control">
            {label && (
              <label className="label">
                <span className="label-text">{label}</span>
              </label>
            )}

            <div className="input-group flex flex-row">
              <input
                {...inputProps}
                type="text"
                onFocus={() => setOpen(false)}
                className="input bg-base-200 flex flex-1 min-w-[50px]"
              />
              <Button
                onClick={() => setOpen(!open)}
                size="md"
                color="primary"
                text={selected.text}
                tabIndex={0}
                type="button"
                renderIcon={() => (editable ? <FaCaretDown /> : <></>)}
                iconPosition="right"
              />
            </div>
          </div>

          <div
            className={`absolute ${
              open ? 'inline-flex' : 'hidden'
            } w-[170px] h-auto bg-base-300 shadow-2xl mt-[5px] right-0 z-20 rounded
          p-2`}
          >
            <ul className="list-none m-0 p-0" role="menu">
              {options.map((item: Option) => {
                return (
                  <li
                    key={item.value}
                    role="menuitem"
                    onClick={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                    className={`btn btn-block btn-ghost active:bg-primary`}
                  >
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
