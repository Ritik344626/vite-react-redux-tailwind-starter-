import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  setCredentials,
  logout as logoutAction,
  selectAuth,
  selectToken,
  selectRefreshToken,
  selectIsAuthenticated,
  selectUser,
} from '../reducers/authReducer';
import { useLoginMutation, useLogoutMutation, useRefreshTokenMutation } from '../api/authApi';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const token = useAppSelector(selectToken);
  const refreshToken = useAppSelector(selectRefreshToken);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);

  const [loginMutation, { isLoading: isLoggingIn, error: loginError }] = useLoginMutation();
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();
  const [refreshTokenMutation] = useRefreshTokenMutation();

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const result = await loginMutation({ email, password }).unwrap();
        dispatch(
          setCredentials({
            token: result.token,
            refreshToken: result.refreshToken,
            user: result.user,
          })
        );
        return result;
      } catch (error) {
        throw error;
      }
    },
    [loginMutation, dispatch]
  );

  const logout = useCallback(async () => {
    try {
      await logoutMutation().unwrap();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      // Always clear auth state, even if API call fails
      dispatch(logoutAction());
    }
  }, [logoutMutation, dispatch]);

  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const result = await refreshTokenMutation({ refreshToken }).unwrap();
      dispatch(
        setCredentials({
          token: result.token,
          refreshToken: result.refreshToken,
        })
      );
      return result.token;
    } catch (error) {
      // If refresh fails, logout the user
      dispatch(logoutAction());
      throw error;
    }
  }, [refreshToken, refreshTokenMutation, dispatch]);

  return {
    // State
    auth,
    token,
    refreshToken,
    isAuthenticated,
    user,
    
    // Actions
    login,
    logout,
    refreshAccessToken,
    
    // Loading states
    isLoggingIn,
    isLoggingOut,
    loginError,
  };
};
