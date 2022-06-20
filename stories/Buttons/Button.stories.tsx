import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../../src/components/button/Button';

const meta: Meta = {
  title: 'Elements/Button',
  component: Button,
};

export default meta;

const Template: Story = (args) => <Button {...args} />;

/** */
export const StandardButton = Template.bind({});
StandardButton.args = {
  text: 'Button',
  size: 'md',
  color: 'primary',
};
