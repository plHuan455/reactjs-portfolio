import { Story, Meta } from '@storybook/react';
import React from 'react';

import SignUpForm from '.';

const meta: Meta = {
  title: 'Components/templates/SignUpForm',
  component: SignUpForm,
  argTypes: {},
};
export default meta;

export const normal: Story = ({...args}) => {
  return <SignUpForm {...args} />
};