# Authentication System Documentation

## Overview

This boilerplate includes a complete authentication system using **Redux Toolkit** for state management. Tokens are stored in Redux state instead of localStorage, providing better security and easier state management.

## Features

✅ Token and refresh token management in Redux
✅ Automatic token injection in API requests
✅ Token refresh functionality
✅ Custom React hook for easy authentication
✅ TypeScript support with full type safety
✅ RTK Query integration for API calls
✅ Login/Logout functionality

## Architecture

```
src/redux/
├── reducers/
│   └── authReducer.ts       # Auth state management
├── api/
│   ├── baseApi.ts          # Base API with token injection
│   └── authApi.ts          # Auth endpoints (login, logout, refresh)
└── hooks/
    └── useAuth.ts          # Custom auth hook
```

## Setup

The auth system is already configured in the Redux store. All you need to do is use it!

## Usage

### 1. Import the Hook

```tsx
import { useAuth } from '@/redux/hooks/useAuth';
```

### 2. Use in Your Component

```tsx
function LoginPage() {
  const { 
    isAuthenticated, 
    user, 
    login, 
    logout, 
    isLoggingIn 
  } = useAuth();

  const handleLogin = async () => {
    try {
      await login('user@example.com', 'password123');
      // Login successful - tokens are now in Redux
    } catch (error) {
      // Handle error
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin} disabled={isLoggingIn}>
          Login
        </button>
      )}
    </div>
  );
}
```

### 3. Access Auth State Anywhere

```tsx
import { useAppSelector } from '@/redux/store';
import { selectToken, selectUser, selectIsAuthenticated } from '@/redux/reducers/authReducer';

function MyComponent() {
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return <div>Token: {token}</div>;
}
```

## Available Functions

### `useAuth()` Hook

Returns an object with the following:

#### State
- `isAuthenticated: boolean` - Whether user is logged in
- `token: string | null` - Access token
- `refreshToken: string | null` - Refresh token
- `user: object | null` - User information (id, email, name)
- `auth: AuthState` - Complete auth state

#### Actions
- `login(email, password)` - Login user and store tokens
- `logout()` - Logout user and clear tokens
- `refreshAccessToken()` - Refresh the access token

#### Loading States
- `isLoggingIn: boolean` - Login request in progress
- `isLoggingOut: boolean` - Logout request in progress
- `loginError: any` - Login error if occurred

## Auth Reducer Actions

You can also dispatch actions directly:

```tsx
import { useAppDispatch } from '@/redux/store';
import { setCredentials, logout, setUser } from '@/redux/reducers/authReducer';

function MyComponent() {
  const dispatch = useAppDispatch();

  // Set credentials manually
  dispatch(setCredentials({
    token: 'your-token',
    refreshToken: 'your-refresh-token',
    user: { id: '1', email: 'user@example.com', name: 'John' }
  }));

  // Update user info
  dispatch(setUser({ id: '1', email: 'updated@example.com', name: 'John Doe' }));

  // Logout
  dispatch(logout());
}
```

## API Integration

### Automatic Token Injection

All API requests automatically include the auth token from Redux:

```tsx
// baseApi.ts automatically adds the token to headers
prepareHeaders: (headers, { getState }) => {
  const token = (getState() as RootState).auth.token;
  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  return headers;
}
```

### Creating Protected Endpoints

```tsx
// src/redux/api/myApi.ts
import { baseApi } from './baseApi';

export const myApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProtectedData: builder.query<DataType, void>({
      query: () => '/protected-endpoint',
      // Token is automatically included!
    }),
  }),
});
```

## Auth API Endpoints

Pre-configured endpoints in `authApi.ts`:

```tsx
import { 
  useLoginMutation, 
  useLogoutMutation, 
  useRefreshTokenMutation,
  useGetCurrentUserQuery 
} from '@/redux/api/authApi';

// Login
const [login] = useLoginMutation();
await login({ email: 'user@example.com', password: 'pass' });

// Logout
const [logout] = useLogoutMutation();
await logout();

// Refresh token
const [refreshToken] = useRefreshTokenMutation();
await refreshToken({ refreshToken: 'your-refresh-token' });

// Get current user
const { data: user } = useGetCurrentUserQuery();
```

## Token Refresh

The system includes automatic token refresh:

```tsx
const { refreshAccessToken } = useAuth();

try {
  const newToken = await refreshAccessToken();
  // New token is automatically stored in Redux
} catch (error) {
  // Refresh failed, user is logged out automatically
}
```

## TypeScript Types

```typescript
interface AuthState {
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  user: {
    id?: string;
    email?: string;
    name?: string;
  } | null;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}
```

## Security Considerations

### ✅ Advantages over localStorage
1. **XSS Protection**: Redux state is cleared on page refresh (unless persisted)
2. **Centralized State**: Easy to track and debug auth state
3. **Better Integration**: Works seamlessly with Redux DevTools
4. **No Direct Access**: JavaScript can't directly read from Redux like localStorage

### 🔒 Important Notes
1. Tokens in Redux are lost on page refresh - consider adding persistence if needed
2. Always use HTTPS in production
3. Implement proper token expiration handling
4. Use HttpOnly cookies for maximum security (backend implementation)

## Persistence (Optional)

If you want to persist auth state across page refreshes, use `redux-persist`:

```bash
npm install redux-persist
```

```tsx
// store.ts
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken', 'user']
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
```

## Example Component

See `/src/pages/AuthExample/index.tsx` for a complete working example.

## API Configuration

Update the API base URL in your `.env` file:

```env
VITE_API_BASE_URL=https://your-api.com/api
```

## Troubleshooting

### Token not being sent with requests
- Check that the auth reducer is added to the store
- Verify token is set in Redux state using Redux DevTools
- Ensure baseApi is using the correct RootState type

### Login not working
- Verify API endpoint URL in authApi.ts
- Check network tab for API errors
- Ensure backend expects the correct request format

### State lost on refresh
- This is expected behavior
- Implement redux-persist if you need persistence
- Or fetch user data on app initialization

## Additional Resources

- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [RTK Query Docs](https://redux-toolkit.js.org/rtk-query/overview)
- [React Redux Hooks](https://react-redux.js.org/api/hooks)
