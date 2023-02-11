import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import PendingManageCalendar from '.';
import { calendarNoteListDummy } from '../../../assets/dataDummy/bankManagerDetailDummy';

export default {
  title: 'Components/Templates/PendingManageCalendar',
  component: PendingManageCalendar,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const [isShowMonthSelect, setIsShowMonthSelect] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return <PendingManageCalendar
      viewDate={new Date}
      onChangeViewDate={() => {}}
      selectedDate={selectedDate}
      noteList={calendarNoteListDummy}
      onHeaderClick={()=> setIsShowMonthSelect(preState => !preState)}
      isShowMonth={isShowMonthSelect}
      onChange={(date) => setSelectedDate(date)}
    />
}