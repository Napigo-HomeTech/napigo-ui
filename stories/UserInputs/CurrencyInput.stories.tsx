import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CurrencyInput } from '../../src/components/textinput/CurrencyInput';

const meta: Meta = {
  title: 'UserInput/CurrencyInput',
  component: CurrencyInput,
};

export default meta;

const Template: Story = (args) => (
  <CurrencyInput name="currency-input" {...args} />
);

/** */
export const Default = Template.bind({});
Default.args = {
  placeholder: 'This is currency Input',
};

export const LabelledCurrencyInput = Template.bind({});
LabelledCurrencyInput.args = {
  label: 'Payable Amount',
  placeholder: '0.00',
};
