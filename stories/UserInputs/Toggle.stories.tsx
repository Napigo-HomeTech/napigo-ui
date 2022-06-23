import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle } from '../../src/components/toggle/Toggle';

const meta: Meta = {
  title: 'UserInput/Toggle',
  component: Toggle,
};

export default meta;

const Template: Story = args => <Toggle {...args} />;

/** */
export const Default = Template.bind({});
Default.args = {};

export const WithRightLabel = Template.bind({});
WithRightLabel.args = {
  label: 'Help Me',
};

export const WithLeftLabel = Template.bind({});
WithLeftLabel.args = {
  label: 'Help Me',
  labelPosition: 'left',
};

export const ColoredToggle = Template.bind({});
ColoredToggle.args = {
  label: 'Colored Toggle',
  color: 'primary',
};
