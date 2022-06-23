import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar } from '../../src/components/avatar/Avatar';

const meta: Meta = {
  title: 'DataDisplay/Avatar',
  component: Avatar,
};

export default meta;

const Template: Story = args => <Avatar {...args} />;

/** */
export const Default = Template.bind({});
Default.args = {};
