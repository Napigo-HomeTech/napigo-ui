import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox } from '../../src/components/checkbox/Checkbox';

const meta: Meta = {
  title: 'UserInput/Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story = args => <Checkbox {...args} />;

/** */
export const Default = Template.bind({});
Default.args = {};

export const WithRightLabel = Template.bind({});
WithRightLabel.args = {
  label: 'Help Me',
  labelPosition: 'right',
};

export const WithLeftLabel = Template.bind({});
WithLeftLabel.args = {
  label: 'Help Left',
  labelPosition: 'left',
};

export const ColoredCheckbox = Template.bind({});
ColoredCheckbox.args = {
  label: 'Colored Checkbox',
  labelPosition: 'right',
  color: 'accent',
};
