import { Story, Meta } from '@storybook/react';
import React from 'react';

import AddGroupMemberForm, { AddGroupMemberFormProps } from '.';

const meta: Meta = {
  title: 'Components/templates/AddGroupMemberForm',
  component: AddGroupMemberForm,
  argTypes: {},
};
export default meta;

export const Normal: Story<AddGroupMemberFormProps> = ({ ...args }) => {
  return (
    <AddGroupMemberForm { ...args } />
  )
};

Normal.args = {
}
