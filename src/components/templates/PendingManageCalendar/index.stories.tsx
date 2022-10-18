import { Story, Meta } from '@storybook/react';
import PendingManageCalendar from '.';

export default {
  title: 'Components/Templates/PendingManageCalendar',
  component: PendingManageCalendar,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
    <PendingManageCalendar selectedDate={new Date()}/>
);