import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInService } from '~services/auth';
import { SignInPayloadTypes } from '~services/auth/type';
import { RootState } from '.';
import { getLocalStorageItem } from '../utils/funcs';
import { getToken, removeToken, storeToken } from '../utils/localStorage';


export const LOCAL_STORAGE_USER = 'current-user';
export const LOCAL_STORAGE_SELECTED_GROUP = 'current-group';

interface UserTypes {
  username: string;
  fullName: string;
  email: string;
}

interface CurrentGroupTypes {
  id: string;
  name: string;
  description: string;
  slug: string;
}
interface SystemState {
  history: string[];
  user?: UserTypes,
  currentGroup?: CurrentGroupTypes;
  token?: string;
}

const initialState: SystemState = {
  history: [],
  token: getToken() ?? undefined,
  currentGroup: getLocalStorageItem(LOCAL_STORAGE_SELECTED_GROUP),
  user: getLocalStorageItem(LOCAL_STORAGE_USER),
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    addHistory($state, action: PayloadAction<string>) {
      if ($state.history.length >= 2) {
        $state.history.shift();
      }
      if($state.history[$state.history.length - 1] === action.payload) return $state;
      $state.history.push(action.payload);
      return $state;
    },
    popHistory($state) {
      if($state.history.length == 0) {
        return $state;
      }
      $state.history.pop();
      return $state;
    },

    addUser($state, action: PayloadAction<{username: string, email: string, fullName: string}>) {
      $state.user = action.payload;
      return $state;
    },

    setCurrentGroup($state, action: PayloadAction<CurrentGroupTypes>){
      $state.currentGroup = action.payload;
      localStorage.setItem(LOCAL_STORAGE_SELECTED_GROUP, JSON.stringify(action.payload));
      return $state;
    },

    signOut($state) {
      $state.user = undefined;
      $state.token = undefined;
      removeToken();
    },

    signIn($state, action: PayloadAction<SignInPayloadTypes>) {
      $state.user = action.payload;
      $state.token = action.payload.token;
      storeToken($state.token);
      return $state;
    }
  },
}
);

export const { addHistory, popHistory, addUser, setCurrentGroup, signOut, signIn } = systemSlice.actions;

export const getSystemUser = (state: RootState) => state.system.user;
export const getSystemHistory = (state: RootState) => state.system.history;
export const getSystemToken = (state: RootState) => state.system.token;

export default systemSlice.reducer;
