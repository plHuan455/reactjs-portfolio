export interface WordResponse {
  _id?: string;
  word?: string;
  mean?: string;
  description?: string;
  imgSrc?: string;
  priority?: number;
}

export interface CreateWordParams {
  word: string;
  mean: string;
  description: string;
  imgSrc: string;
}

export type UpdateWordParams = Partial<CreateWordParams> & { priority?: number};