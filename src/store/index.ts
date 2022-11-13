 import {Action, ThunkAction, configureStore} from "@reduxjs/toolkit";
 import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
 import exampleReducer from "./example";
 import systemReducer from "./system";

 const rootReducer = {
  example: exampleReducer,
	system: systemReducer,
 }

 export const store = configureStore({
  reducer: rootReducer
 })

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
