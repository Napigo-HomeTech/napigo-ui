import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectButton } from '../../src/components/select-button/SelectButton';

const meta: Meta = {
  title: 'Actions/SelectButton',
  component: SelectButton,
};

export default meta;

export type Option = {
  value: string;
  text: string;
};

const Template: Story = args => {
  const [selected] = React.useState<Option | null>(null);

  return <SelectButton selected={selected} {...args} />;
};

/** */
export const Default = Template.bind({});
Default.args = {
  label: 'Card Type',
  placeholder: 'This is Input',
  defaultText: 'Select Type',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: 'Without Label',
  defaultText: 'Select Type',
};
