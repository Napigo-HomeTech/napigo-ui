import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../../src/components/button/Button';
import { FaBeer } from 'react-icons/fa';

const meta: Meta = {
  title: 'Actions/Button',
  component: Button,
};

export default meta;

const Template: Story = (args) => <Button {...args} />;

/** */
export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  size: 'md',
  color: 'primary',
  variant: 'normal',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  size: 'md',
  text: 'Hello',
  color: 'primary',
  variant: 'normal',
  renderIcon: () => {
    return <FaBeer />;
  },
};
export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  size: 'md',
  color: 'ghost',
  variant: 'normal',
  renderIcon: () => {
    return <FaBeer />;
  },
};

export const ButtonIconOutline = Template.bind({});
ButtonIconOutline.args = {
  size: 'md',
  color: 'ghost',
  outline: true,
  variant: 'normal',
  renderIcon: () => {
    return <FaBeer />;
  },
};

export const ButtonBlock = Template.bind({});
ButtonBlock.args = {
  text: 'Button Block',
  size: 'md',
  color: 'primary',
  variant: 'block',
};
