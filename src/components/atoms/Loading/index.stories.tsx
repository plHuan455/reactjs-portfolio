import { Story, Meta } from '@storybook/react';

import Loading from '.';

const meta: Meta = {
  title: 'Components/atoms/Loading',
  component: Loading,
  argTypes: {},
};
export default meta;

export const normal: Story = ({ ...args }) => {
  return <Loading />
};

normal.args = {
}