import { Story, Meta } from '@storybook/react';
import React from 'react';

import Lottie from '.';

const meta: Meta = {
  title: 'Components/atoms/Lottie',
  component: Lottie,
  argTypes: {},
};
export default meta;

export const normal: Story = ({...args}) => {
  return <Lottie {...args} />
};