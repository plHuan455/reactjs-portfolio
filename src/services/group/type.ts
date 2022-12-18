export interface CreateGroupParams {
  avatarImg: string;
  description: string;
  name: string;
}

export interface GroupPayloadTypes {
  id?: string;
  name?: string;
  description?: string;
  avatarImg?: string;
  members?: MemberTypes[];
  slug?: string;
}

export interface UpdateGroupParams {
  data: CreateGroupParams,
  slug: string;
}

export interface MemberTypes {
  fullname: string;
}