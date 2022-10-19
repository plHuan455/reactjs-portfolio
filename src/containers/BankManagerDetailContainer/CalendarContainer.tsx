import { useState } from "react";
import { calendarNoteList } from "../../assets/dataDummy/bankManagerDetailDummy";
import PendingManageCalendar from "../../components/templates/PendingManageCalendar"
import Section from "../../components/templates/Section"

interface CalendarContainerProps {
}

const CalendarContainer: React.FC<CalendarContainerProps> = () => {
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

export default CalendarContainer;