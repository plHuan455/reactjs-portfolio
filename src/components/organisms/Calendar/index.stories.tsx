import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import Calendar from '.';

export default {
  title: 'Components/Organisms/Calendar',
  component: Calendar,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  return <Calendar
    viewDate={new Date()}
    onChangeViewDate={() => {}}
    selectedDate={selectedDate}
    onChange={(date) => setSelectedDate(date)}
  />
}