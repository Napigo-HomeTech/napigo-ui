import React from 'react';
import { TextInput } from '../textinput/TextInput';
import { InputSelect } from '../input-select/InputSelect';
import { SelectButton } from '../select-button/SelectButton';
import { CurrencyInput } from '../textinput/CurrencyInput';
import { Checkbox } from '../checkbox/Checkbox';

const options = [
  {
    value: 'YEAR',
    text: 'YEAR (S)',
  },
  {
    value: 'MONTH',
    text: 'MONTH (S)',
  },
];
export const Form: React.FC = () => {
  return (
    <div className="flex flex-row w-full h-screen border items-center justify-center p-[300px]">
      <form className="flex flex-col gap-2 w-full h-auto py-10">
        <h3 className="text-lg font-bold text-white">Form Title</h3>
        <TextInput
          editable={false}
          placeholder="-"
          label="Username"
          name="Username"
        />
        <TextInput
          placeholder="-"
          label="Username"
          name="Password"
          type="password"
        />
        <InputSelect
          label="Options"
          defaultSelected={options[0]}
          options={options}
        />
        <InputSelect
          label="Options"
          defaultSelected={options[0]}
          options={options}
        />
        <InputSelect
          label="Options"
          defaultSelected={options[0]}
          options={options}
        />
        <SelectButton
          defaultText="Car Type"
          selected={null}
          label="My Select"
        />
        <CurrencyInput placeholder="0.00" name="Amount" />

        <div className="flex flex-row gap-4">
          <Checkbox label="Remember Me" labelPosition="right" />
          <Checkbox label="Cost Now" labelPosition="right" />
          <Checkbox />
        </div>
      </form>
    </div>
  );
};
