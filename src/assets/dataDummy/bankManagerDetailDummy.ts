import { PendingManageNote } from "../../components/templates/PendingManageCalendar";

export const calendarNoteList: PendingManageNote[] = [
  { date: new Date(2022, 8, 30, 3), money: 100000, content: 'test 1', bank: 'Vietcombank' },
  { date: new Date(2022, 9, 10, 17, 30, 0), money: 100000, content: 'test 1', bank: 'BIDV' },
  { date: new Date(2022, 9, 10, 18, 25, 0), money: -150000, content: 'test 2', bank: 'Vietcombank' },
]