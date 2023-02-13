export interface CreatePendingParams {
  content: string;
  groupId: string;
  date: string;
  money: number;
  bank: string;
}

export type UpdatePendingParams = Omit<CreatePendingParams, 'groupId'>

export interface PendingResponse {
  _id?: string;
  content?: string;
  bank?: string;
  date?: string;
  money?: number;
  groupId?: string;
}