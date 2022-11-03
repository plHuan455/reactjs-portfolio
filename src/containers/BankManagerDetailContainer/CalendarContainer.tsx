import { useState } from "react";
import { calendarNoteListDummy } from "../../assets/dataDummy/bankManagerDetailDummy";
import PendingManageCalendar from "../../components/templates/PendingManageCalendar"

interface CalendarContainerProps {
}

const CalendarContainer: React.FC<CalendarContainerProps> = () => {
  const [isShowMonthSelect, setIsShowMonthSelect] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return <PendingManageCalendar 
      selectedDate={selectedDate}
      noteList={calendarNoteListDummy}
      onHeaderClick={()=> setIsShowMonthSelect(preState => !preState)}
      isShowMonth={isShowMonthSelect}
      onChange={(date) => setSelectedDate(date)}
    />
}

export default CalendarContainer;