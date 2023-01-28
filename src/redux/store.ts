import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserSlice } from './user/userState';

export const store = configureStore({
  reducer: {
    userState: UserSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

// prettier-ignore
export const useAppSelector: TypedUseSelectorHook<
ReturnType<typeof store.getState>
> = useSelector;
