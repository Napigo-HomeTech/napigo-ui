import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../../src/components/button/Button';
import { FaBeer } from 'react-icons/fa';

const meta: Meta = {
  title: 'Elements/Buttons',
  component: Button,
};

export default meta;

const Template: Story = (args) => <Button {...args} />;

/** */
export const TextButton = Template.bind({});
TextButton.args = {
  text: 'Button',
  size: 'md',
  color: 'primary',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  size: 'md',
  text: 'Hello',
  color: 'primary',
  renderIcon: () => {
    return <FaBeer />;
  },
};
export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  size: 'md',
  color: 'ghost',
  renderIcon: () => {
    return <FaBeer />;
  },
};

export const ButtonIconOutline = Template.bind({});
ButtonIconOutline.args = {
  size: 'md',
  color: 'ghost',
  outline: true,
  renderIcon: () => {
    return <FaBeer />;
  },
};
