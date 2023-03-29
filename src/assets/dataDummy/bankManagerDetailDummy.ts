import { PendingManageNote } from "../../components/templates/PendingManageCalendar";

export const calendarNoteListDummy: PendingManageNote[] = [
  { id: "1", date: new Date(2023, 1, 15, 3), money: 100000, content: 'test 1', bank: 'Vietcombank' },
  { id: "2", date: new Date(2022, 10, 10, 17, 30, 0), money: 100000, content: 'test 1', bank: 'BIDV' },
  { id: "3", date: new Date(2022, 10, 10, 18, 25, 0), money: -150000, content: 'test 2', bank: 'Vietcombank' },
]