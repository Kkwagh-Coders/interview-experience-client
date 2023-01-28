/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Admin } from '../../types/admin.types';
import { User } from '../../types/user.types';

export interface UserState {
  isLoading: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;

  admin: Admin | null;
  user: User | null;
}

const initialState: UserState = {
  isLoading: true,
  isLoggedIn: false,
  isAdmin: false,
  admin: null,
  user: null,
};

export const UserSlice = createSlice({
  name: 'userState',
  initialState,

  reducers: {
    loginAdmin: (state, action: PayloadAction<{ admin: Admin }>) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isAdmin = true;
      state.admin = action.payload.admin;
    },

    loginUser: (state, action: PayloadAction<{ user: User }>) => {
      state.isLoading = false;

      state.isLoggedIn = true;
      state.isAdmin = false;
      state.user = action.payload.user;
    },

    logout: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    },

    setIsLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export default UserSlice.reducer;
export const userAction = UserSlice.actions;
