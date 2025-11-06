import { baseApi } from './baseApi';

// Example types for your API responses
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Define your API endpoints
export const exampleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET request example
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    
    // GET request with parameter
    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    
    // POST request example
    createUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),
    
    // PUT request example
    updateUser: builder.mutation<User, { id: number; data: Partial<User> }>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
    
    // DELETE request example
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    
    // Example with query parameters
    getPosts: builder.query<Post[], { userId?: number; limit?: number }>({
      query: ({ userId, limit }) => ({
        url: '/posts',
        params: { userId, limit },
      }),
      providesTags: ['Post'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetPostsQuery,
} = exampleApi;
