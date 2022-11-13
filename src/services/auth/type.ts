export interface SignInParams {
  username: string;
  password: string;
}

export interface SignInPayloadTypes {
  token: string;
  username: string;
  fullName: string;
  email: string;
}

export interface UserInfoPayloadTypes {
  username: string;
  fullName: string;
  email: string;
}