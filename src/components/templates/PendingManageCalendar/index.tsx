import { useMemo, useState } from "react";
import Button from "~atoms/Button";
import useMatchMedia from "../../../hooks/useMatchMedia";
import { addZero, convertMoney, isADate, numberToMoney } from "../../../utils/funcs";
import Text from "../../atoms/Text";
import Calendar, { CalendarProps, NoteType } from "../../organisms/Calendar";
import Container from "../../organisms/ContainerBase";
import Modal from "../../organisms/Modal";

export interface PendingManageNote {
  id: string;
  money: number;
  content: string;
  bank: string;
  date: Date;
}
interface PendingManageCalendarProps extends Omit<CalendarProps, 'noteList'> {
  noteList?: PendingManageNote[];
  onAddPendingClick?: () => void;
  onCloseDetailModal?: () => void;
}

const PendingManageCalendar: React.FC<PendingManageCalendarProps> = ({
  noteList = [],
  selectedDate = new Date(),
  onChange,
  onCloseDetailModal,
  onAddPendingClick,
  ...args
}) => {
  const { isMobile, isTablet } = useMatchMedia();
  const isDesktop = !(isMobile || isTablet);

  const convertNoteList = useMemo<NoteType[]>(() => {
    let moneyTotalHash: { [key: number]: { increaseMoney: number, decreaseMoney: number } } = {};

    noteList.forEach(note => {
      const noteDate = new Date((new Date(note.date)).setHours(0, 0, 0, 0));
      if (moneyTotalHash[noteDate.getTime()]) {
        if (note.money < 0)
          moneyTotalHash[noteDate.getTime()].decreaseMoney = moneyTotalHash[noteDate.getTime()].decreaseMoney + note.money;
        else {
          moneyTotalHash[noteDate.getTime()].increaseMoney = moneyTotalHash[noteDate.getTime()].increaseMoney + note.money;
        }
        return;
      }

      moneyTotalHash[noteDate.getTime()] = {
        increaseMoney: note.money >= 0 ? note.money : 0,
        decreaseMoney: note.money < 0 ? note.money : 0,
      }
    }, [noteList]);

    return Object.keys(moneyTotalHash).map(keyValue => {
      const increaseMoney = moneyTotalHash[Number(keyValue)].increaseMoney;
      const decreaseMoney = Math.abs(moneyTotalHash[Number(keyValue)].decreaseMoney);

      return {
        date: new Date(Number(keyValue)),
        noteNode: <div className="t-pendingManageCalendar_note">
          <Text modifiers={['14x16', '600', 'deepGreenCyanTurquoise']}>
            {`+${isDesktop ? numberToMoney(increaseMoney) : convertMoney(increaseMoney)}`}
          </Text>
          <Text modifiers={['14x16', '600', 'rustyRed']}>
            {`-${isDesktop ? numberToMoney(decreaseMoney) : convertMoney(decreaseMoney)}`}
          </Text>
        </div>
      }
    })
  }, [noteList, isDesktop]);

  return <div className="t-pendingManageCalendar">
    <Container>
      <Calendar
        {...args}
        selectedDate={selectedDate}
        onChange={(date) => {
          if (onChange) onChange(date);
        }}
        noteList={convertNoteList}
      />
    </Container>
  </div>
}

export default PendingManageCalendar;
