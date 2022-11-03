import { Story, Meta } from '@storybook/react';
import React from 'react';

import CreatePendingForm, { CreatePendingFormProps } from '.';

const meta: Meta = {
  title: 'Components/organisms/CreatePendingForm',
  component: CreatePendingForm,
  argTypes: {},
};
export default meta;

export const Normal: Story<CreatePendingFormProps> = ({ ...args }) => {
  return <CreatePendingForm { ...args } />
};

Normal.args = {
}
