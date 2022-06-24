import { Listbox, Transition } from '@headlessui/react';
import lodash from 'lodash';
import React, { Fragment, useState } from 'react';
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
  const { label, options } = props;
  const [selected, setSelected] = useState<Option | null>(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <Fragment>
      <ClickAwayListener
        onClickAway={() => {
          setOpenDropdown(false);
        }}
      >
        <div className="form-control w-full max-w-xs relative">
          {label && (
            <label className="label">
              <span className="label-text">{label}</span>
            </label>
          )}
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button
                as={'button'}
                className={`relative 
                input flex-1 
                flex 
                flex-row 
                items-center 
                bg-base-200 
                border-transparent 
                cursor-pointer
                min-w-[200px]
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
                ${activeSelectClassMap(openDropdown)}`}
              >
                <span className="block truncate">
                  {selected === null ? 'Select Option' : selected.text}
                </span>
                <span
                  className={`absolute bg-base-200 right-[10px] top-[16px]`}
                >
                  <FaCaretDown />
                </span>
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute 
                bg-base-300 
                mt-2 
                overflow-auto 
                rounded 
                shadow-2xl 
                w-full
                focus:outline-none
                `}
                >
                  <Listbox.Option
                    key={lodash.uniqueId()}
                    value={null}
                    className={({ active }) => `
                        px-4 py-[10px] text-sm text-white/30 ${
                          active ? 'bg-primary' : ''
                        }
                    `}
                  >
                    Select Option
                  </Listbox.Option>
                  {options.map((item: Option) => (
                    <Listbox.Option
                      key={lodash.uniqueId()}
                      value={item}
                      className={({ active }) => `
                        px-4 py-[10px] text-sm cursor-pointer ${
                          active ? 'bg-primary text-base-content-100' : ''
                        }
                    `}
                    >
                      {item.text}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </ClickAwayListener>
    </Fragment>
  );
};
