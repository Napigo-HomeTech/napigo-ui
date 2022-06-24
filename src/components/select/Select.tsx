import { Listbox, Transition } from '@headlessui/react';
import lodash from 'lodash';
import React, { Fragment, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import ClickAwayListener from '../common/ClickAwayListener';

type Option = {
  value: string | number;
  text: string;
};

type SelectProps = {
  label?: string;
  options: Option[];
  listBoxComponent: React.ReactElement; //          This is the Base Component come from Headless use
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
        <div className="listbox">
          {label && (
            <label className="label">
              <span className="label-text">{label}</span>
            </label>
          )}
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button
                as={'button'}
                className={`
                listbox-button ${openDropdown ? 'active' : ''}`}
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
                <Listbox.Options className="listbox-options">
                  <Listbox.Option
                    key={lodash.uniqueId()}
                    value={null}
                    className={({ active }) => `
                        listbox-option default ${active ? 'active' : ''}
                    `}
                  >
                    Select Hanafi
                  </Listbox.Option>
                  {options.map((item: Option) => (
                    <Listbox.Option
                      key={lodash.uniqueId()}
                      value={item}
                      className={({ active }) => `
                      listbox-option ${active ? 'active' : ''}
 
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
