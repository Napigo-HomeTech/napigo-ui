import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AvatarButton } from '../../src/components/button/AvatarButton';

const meta: Meta = {
  title: 'Actions/AvatarButton',
  component: AvatarButton,
};

export default meta;

const Template: Story = args => <AvatarButton {...args} />;

/** */
export const Default = Template.bind({});
Default.args = {
  ringColor: 'primary',
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  ringColor: 'primary',
  active: true,
};

export const Colored = Template.bind({});
Colored.args = {
  ringColor: 'accent',
  active: false,
};
