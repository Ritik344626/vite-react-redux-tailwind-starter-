import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  user: {
    id?: string;
    email?: string;
    name?: string;
  } | null;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        token: string;
        refreshToken: string;
        user?: AuthState['user'];
      }>
    ) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      if (action.payload.user) {
        state.user = action.payload.user;
      }
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setCredentials, setToken, setRefreshToken, setUser, logout } = authSlice.actions;

// Selectors
export const selectAuth = (state: RootState) => state.auth;
export const selectToken = (state: RootState) => state.auth.token;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
