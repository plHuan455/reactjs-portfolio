import { Story, Meta } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';

import SignUpForm, { SignUpFields } from '.';

const meta: Meta = {
  title: 'Components/templates/SignUpForm',
  component: SignUpForm,
  argTypes: {},
};
export default meta;

export const normal: Story = ({...args}) => {
  const method = useForm<SignUpFields>();
  return <BrowserRouter>
    <SignUpForm {...args} method={method} onSubmit={() => {}}/>
  </BrowserRouter>
};