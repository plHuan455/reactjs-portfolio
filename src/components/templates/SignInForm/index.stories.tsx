import { yupResolver } from '@hookform/resolvers/yup';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import SignInForm, { SignInFields } from '.';

const meta: Meta = {
  title: 'Components/templates/SignInForm',
  component: SignInForm,
  argTypes: {},
};
export default meta;


const schema = yup.object({
  username: yup.string().required('Vui lòng nhập tên nhóm!'),
  password: yup.string().required('Vui lòng nhập mật khẩu!'),
  remember: yup.boolean(),
}).required();

export const normal: Story = ({...args}) => {
  const method = useForm<SignInFields>({
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
    resolver: yupResolver(schema)
  });
  return <SignInForm {...args}  method={method} onSubmit={(values)=> console.log(values)}/>
};