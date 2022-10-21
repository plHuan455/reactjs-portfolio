import { Story, Meta } from '@storybook/react';

import Loading, { LoadingProps } from '.';

const meta: Meta = {
  title: 'Components/atoms/Loading',
  component: Loading,
  argTypes: {},
};
export default meta;

export const normal: Story<LoadingProps> = ({ ...args }) => {
  return <Loading {...args} />
};

normal.args = {
  size: '36x36'
}