import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Get token from Redux store instead of localStorage
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // Tag types for cache invalidation
  tagTypes: ['User', 'Post', 'Test'],
  endpoints: () => ({}),
});

export default baseApi;
