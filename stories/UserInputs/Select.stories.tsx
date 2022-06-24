import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from '../../src/components/select/Select';

const meta: Meta = {
  title: 'UserInput/Select',
  component: Select,
};

export default meta;

const options = [
  {
    value: 0,
    text: 'Car Model',
  },
  {
    value: 1,
    text: 'Car Type',
  },
  {
    value: 2,
    text: 'Car Vehicle',
  },
];
const Template: Story = args => {
  return <Select options={options} {...args} />;
};

/** */
export const Default = Template.bind({});
Default.args = {};
