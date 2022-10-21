import { Story, Meta } from '@storybook/react';

import Lottie from '.';

const meta: Meta = {
  title: 'Components/atoms/Lottie',
  component: Lottie,
  argTypes: {},
};
export default meta;

export const normal: Story = ({src, ...args}) => {
  return <Lottie src={src} />
};

normal.args = {
  src: 'https://assets1.lottiefiles.com/packages/lf20_Zz37yH.json'
}