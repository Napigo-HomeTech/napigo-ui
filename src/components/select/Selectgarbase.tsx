import { Listbox } from '@headlessui/react';
import React, { Fragment, useState } from 'react';


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
  options: Option[];
};
export const Select: React.FC<SelectProps> = props => {
  const [selected, setSelected] = useState<Option | null>(null);
const [open, setOpen ] = useState<boolean>(false);

  return <Listbox value={selected} onChange={setSelected}>
    <div className='relative'>
        <Listbox.Button as ={Fragment}>
            <div role="menu" className={`
            input
            flex-1
            flex flex-row
            items-center
            bg-base-200
            border-transparent
            cursor-pointer
            min-w-[50px]
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
            `}
        </Listbox.Button>
    </div>
  </Listbox>;
};
