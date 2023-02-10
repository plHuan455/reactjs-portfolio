export interface CreatePendingParams {
  content: string;
  groupId: string;
  date: string;
  money: string;
  bank: string;
}

export interface PendingResponse {
  _id?: string;
  content?: string;
  bank?: string;
  date?: string;
  money?: number;
  groupId?: string;
}