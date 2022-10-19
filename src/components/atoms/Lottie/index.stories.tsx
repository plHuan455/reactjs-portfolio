import { Story, Meta } from '@storybook/react';
import React from 'react';

import Lottie from '.';

const meta: Meta = {
  title: 'Components/atoms/Lottie',
  component: Lottie,
  argTypes: {},
};
export default meta;

export const normal: Story = ({src, ...args}) => {
  return <Lottie src={src} {...args} />
};

normal.args = {
  src: 'https://lottie.host/155f5c16-5452-44b5-a65c-12c0edbd7a56/blyAmy6UH2.json'
}