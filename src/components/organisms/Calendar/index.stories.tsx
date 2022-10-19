import { Story, Meta } from '@storybook/react';
import Calendar from '.';

export default {
  title: 'Components/organisms/Calendar',
  component: Calendar,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
    <Calendar selectedDate={new Date()}/>
);