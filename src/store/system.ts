import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignInService } from '~services/auth';
import { SignInPayloadTypes } from '~services/auth/type';
import { RootState } from '.';
import { storeToken } from '../utils/localStorage';

interface UserTypes {
  username: string;
  fullName: string;
  email: string;
}
interface SystemState {
  history: string[];
  user?: UserTypes,
  token?: string;
}

const initialState: SystemState = {
  history: [],
};


export const signInAsync = createAsyncThunk('systemReducer/system', SignInService);


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
    }
  },

  extraReducers(builder) {
    builder.addCase(signInAsync.fulfilled, ($state, action: PayloadAction<SignInPayloadTypes>) => {
      $state.user = action.payload;
      $state.token = action.payload.token;
      storeToken(action.payload.token)
      return $state;
    });
  }
}
);

export const { addHistory, popHistory } = systemSlice.actions;

export const getSystemUser = (state: RootState) => state.system.user;
export const getSystemHistory = (state: RootState) => state.system.history;

export default systemSlice.reducer;
