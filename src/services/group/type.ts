export interface CreateGroupParams {
  avatarImg: string;
  description: string;
  name: string;
  baseMoney: number;
}

export interface GroupPayloadTypes {
  _id?: string;
  name?: string;
  description?: string;
  avatarImg?: string;
  baseMoney?: number;
  members?: MemberTypes[];
  slug?: string;
}

export interface UpdateGroupParams {
  data: CreateGroupParams,
  slug: string;
}

export interface MemberTypes {
  email?: string;
  id?: string;
  createdAt?: string;
  username?: string;
  userId?: string;
  fullname: string;
  isAdmin?: boolean;
}