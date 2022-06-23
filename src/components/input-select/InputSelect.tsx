import React, { Fragment, useCallback, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Button } from '../button/Button';
import { Transition } from '@headlessui/react';
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
}
export const InputSelect: React.FC<InputSelectProps> = props => {
  const {
    options,
    defaultSelected,
    onSelectChange,
    label,
    ...inputProps
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option>(defaultSelected);

  useCallback(() => {
    onSelectChange?.(selected);
  }, [selected]);

  return (
    <div>
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
                className="input input-bordered flex flex-1 min-w-[50px] "
              />
              <Button
                onClick={() => setOpen(!open)}
                size="md"
                color="primary"
                text={selected.text}
                tabIndex={0}
                renderIcon={() => <FaCaretDown />}
                iconPosition="right"
              />
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div
              className="absolute w-[170px] h-auto bg-base-300 shadow-2xl mt-[5px] right-0 z-20 rounded
          p-2"
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
          </Transition>
        </div>
      </ClickAwayListener>
    </div>
  );
};
