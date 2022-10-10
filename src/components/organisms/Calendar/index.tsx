import React, { useMemo, useState } from "react";
import { getDateList, getFirstDateInMonth, isADate, mapModifiers } from "../../../utils/funcs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import { BiLoaderAlt } from "react-icons/bi";
import Loading from "../../atoms/Loading";

export interface NoteType {
  date: Date;
  noteNode: React.ReactNode;
}
export interface CalendarProps {
  dayWeeks?: string[];
  selectedDate: Date;
  isShowMonth?: boolean;
  noteList?: NoteType[];
  isLoading?: boolean;
  onArrowLeftClick?: (date: Date) => void;
  onArrowRightClick?: (date: Date) => void;
  onChange?: (date: Date) => void;
  onHeaderClick?: () => void;
}

const Calendar: React.FC<CalendarProps> = ({
  dayWeeks = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  selectedDate = new Date(),
  isShowMonth,
  noteList = [],
  isLoading,
  onChange,
  onHeaderClick,
  onArrowLeftClick,
  onArrowRightClick,
}) => {
  const [calendarViewDate, setCalendarViewDate] = useState<Date>(selectedDate);

  const dateList = useMemo(() => getDateList(calendarViewDate), [calendarViewDate]);

  const convertNoteListHash = useMemo(() => {
    let noteListHash: { [key: string]: React.ReactNode } = {};
    noteList.forEach(note => {
      const noteWithoutTime = new Date((new Date(note.date)).setHours(0, 0, 0, 0));
      noteListHash[noteWithoutTime.getTime()] = note.noteNode;
    })
    return noteListHash;
  }, [noteList, calendarViewDate]);

  const handleArrowLeftClick = () => {
    let newDate;
    if (isShowMonth) {
      newDate = getFirstDateInMonth(new Date(calendarViewDate.getFullYear() - 1, calendarViewDate.getMonth(), calendarViewDate.getDate()));
    }
    else {
      newDate = getFirstDateInMonth(new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, calendarViewDate.getDate()));
    }
    setCalendarViewDate(newDate);

    if (onArrowLeftClick) onArrowLeftClick(newDate);
  }

  const handleArrowRightClick = () => {
    let newDate;
    if (isShowMonth) {
      newDate = getFirstDateInMonth(new Date(calendarViewDate.getFullYear() + 1, calendarViewDate.getMonth(), calendarViewDate.getDate()));
    }
    else {
      newDate = getFirstDateInMonth(new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, calendarViewDate.getDate()))
    }
    setCalendarViewDate(newDate);

    if (onArrowRightClick) onArrowRightClick(newDate);
  }

  const handleHeaderClick = () => {
    if (onHeaderClick) onHeaderClick();
  }

  const handleItemClick = (date: Date) => {
    if (isShowMonth) setCalendarViewDate(date);
    if (onChange) onChange(date);
  }

  const handleMonthClick = (month: number) => {
    setCalendarViewDate(new Date(calendarViewDate.getFullYear(), month - 1, calendarViewDate.getDate()));
    if (onHeaderClick) onHeaderClick();
  }

  return <div className="o-calendar">
    <div className="o-calendar_header">
      <div className="o-calendar_header_text" onClick={handleHeaderClick}>
        <Text modifiers={['28x36', '700', 'black']}>{`${isShowMonth ? '' : `Tháng ${calendarViewDate.getMonth() + 1} `}Năm ${calendarViewDate.getFullYear()}`}</Text>
        {isLoading && <div className="o-calendar_header_loading">
          <Loading size="32x32" />
        </div>}
      </div>
      <div className="o-calendar_header_buttons">
        <div className="o-calendar_header_btnLeft" onClick={handleArrowLeftClick}>
          <Icon modifiers={['36x36']}>{MdKeyboardArrowLeft}</Icon>
        </div>
        <div className="o-calendar_header_btnRight" onClick={handleArrowRightClick}>
          <Icon modifiers={['36x36']}>{MdKeyboardArrowRight}</Icon>
        </div>
      </div>

    </div>

    {isShowMonth ? Array(12).fill(1).map((_, idx) =>
      <div className="o-calendar_item o-calendar_item-month" onClick={() => { handleMonthClick(idx + 1) }}>
        <div className="o-calendar_itemWrapper">
          <Text modifiers={['16x24', 'charcoal', '700']}>
            {`Tháng ${idx + 1}`}
          </Text>
        </div>
      </div>)
      : <>
        {dayWeeks.map((value, idx) =>
          <div className={mapModifiers('o-calendar_item', 'weekDay', idx === 0 && 'noBl')} key={`calendar-weekDay-${value}`}>
            <div className="o-calendar_itemWrapper">
              <Text modifiers={['16x24', 'charcoal', '700']}>
                {value}
              </Text>
            </div>
          </div>)}
        {dateList.map((value, idx) => (
          <div
            className={mapModifiers(
              'o-calendar_item',
              idx % 7 === 0 && 'noBl',
              value.getMonth() !== calendarViewDate.getMonth() && 'outMonth',
              isADate(new Date(), value) && 'today'
            )}
            key={`calendar-date-${idx}`}
            onClick={() => { handleItemClick(value) }}
          >
            <div className="o-calendar_itemWrapper">
              <div className="o-calendar_itemText">
                <Text modifiers={['16x20', '600', 'black']}>
                  {value.getDate()}
                </Text>
              </div>
              <div className="o-calendar_itemNote">
                {convertNoteListHash[value.getTime()]}
              </div>
            </div>
          </div>)
        )}
      </>}
  </div>
}

export default Calendar;