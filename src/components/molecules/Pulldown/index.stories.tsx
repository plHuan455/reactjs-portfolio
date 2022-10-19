import { Story, Meta } from '@storybook/react';
import Pulldown from '.';

export default {
  title: 'Components/Molecules/Pulldown',
  component: Pulldown,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  return <Pulldown
    options={[]}
  />
}