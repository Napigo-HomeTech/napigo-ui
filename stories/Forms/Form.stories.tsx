import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form } from '../../src/components/form/Form';

const meta: Meta = {
  title: 'Form/FormExample',
  component: Form,
};

export default meta;

const Template: Story = args => <Form {...args} />;

/** */
export const Default = Template.bind({});
Default.args = {};
