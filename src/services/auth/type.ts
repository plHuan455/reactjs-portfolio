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

export interface SignUpParamsTypes {
  username: string;
  password: string;
  email: string;
  fullName: string;
}

export interface UserInfoPayloadTypes {
  id?: string;
  username?: string;
  fullname?: string;
  email?: string;
}