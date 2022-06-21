import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputSelect } from '../../src/components/input-select/InputSelect';
import { useState } from '@storybook/addons';

const meta: Meta = {
  title: 'UserInput/InputSelect',
  component: InputSelect,
};

export default meta;

const myOptions = [
  {
    value: 'MONTH',
    text: 'Month (s)',
  },
  {
    value: 'YEAR',
    text: 'Year (s)',
  },
];
const Template: Story = (args) => {
  const [_, setValue] = useState<string>('');

  return (
    <InputSelect
      options={myOptions}
      defaultSelected={myOptions[0]}
      onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
        setValue(ev.target.value)
      }
      {...args}
    />
  );
};

/** */
export const Default = Template.bind({});
Default.args = {
  label: 'Cost Manangement',
  placeholder: '0.00',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: '0.00',
};
