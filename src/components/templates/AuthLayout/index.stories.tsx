import { Story, Meta } from '@storybook/react';
import React from 'react';

import AuthLayout from '.';

const meta: Meta = {
  title: 'Components/templates/AuthLayout',
  component: AuthLayout,
  argTypes: {},
};
export default meta;

export const normal: Story = ({...args}) => {
  return <AuthLayout onHeaderControlClick={() => {}} {...args} />
};