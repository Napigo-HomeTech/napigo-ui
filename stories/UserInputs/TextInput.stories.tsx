import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput } from '../../src/components/textinput/TextInput';

const meta: Meta = {
  title: 'UserInput/TextInput',
  component: TextInput,
};

export default meta;

const Template: Story = (args) => <TextInput name="text-input" {...args} />;

/** */
export const Default = Template.bind({});
Default.args = {
  placeholder: 'This is Input',
};

export const LabelledInput = Template.bind({});
LabelledInput.args = {
  label: 'Enter Name',
  placeholder: 'My Name',
};
