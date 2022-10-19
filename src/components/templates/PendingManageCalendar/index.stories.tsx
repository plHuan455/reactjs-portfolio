import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import PendingManageCalendar from '.';
import { calendarNoteList } from '../../../assets/dataDummy/bankManagerDetailDummy';

export default {
  title: 'Components/Templates/PendingManageCalendar',
  component: PendingManageCalendar,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const [isShowMonthSelect, setIsShowMonthSelect] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return <PendingManageCalendar 
      selectedDate={selectedDate}
      noteList={calendarNoteList}
      onHeaderClick={()=> setIsShowMonthSelect(preState => !preState)}
      isShowMonth={isShowMonthSelect}
      onChange={(date) => setSelectedDate(date)}
    />
}