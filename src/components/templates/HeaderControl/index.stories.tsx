import { Story, Meta } from '@storybook/react';
import React from 'react';

import HeaderControl from '.';

const meta: Meta = {
  title: 'Components/templates/HeaderControl',
  component: HeaderControl,
  argTypes: {},
};
export default meta;

export const normal: Story = ({...args}) => {
  return <HeaderControl backBtnTitle='' onClick={() => {}} {...args} />
};