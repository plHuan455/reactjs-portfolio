import { Story, Meta } from '@storybook/react';
import React from 'react';

import SignInForm from '.';

const meta: Meta = {
  title: 'Components/templates/SignInForm',
  component: SignInForm,
  argTypes: {},
};
export default meta;

export const normal: Story = ({...args}) => {
  return <SignInForm {...args} />
};