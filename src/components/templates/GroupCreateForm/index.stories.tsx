

import { yupResolver } from '@hookform/resolvers/yup';
import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import GroupCreateForm, { GroupCreateFields } from '.';
import * as yup from 'yup'

export default {
  title: 'Components/Templates/GroupCreateForm',
  component: GroupCreateForm,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const method = useForm<GroupCreateFields>({
    mode: 'onBlur', 
    defaultValues: { name: '', description: '', avatarImg: ''},
    resolver: yupResolver(yup.object({
      name: yup.string().required('Vui lòng nhập tên nhóm!'),
      description: yup.string(),
      avatarImg: yup.string(),
    }).required()),
  });
  return <GroupCreateForm method={method} onSubmit={(value)=> console.log(value)} />
}