# Vitejs + React + TypeScript + Redux Toolkit + Tailwind CSS + shadcn/ui Boilerplate

A modern React boilerplate with Vite, TypeScript, Redux Toolkit, Tailwind CSS, and shadcn/ui.

## Tech Stack

- ⚡️ **Vite** - Next Generation Frontend Tooling
- ⚛️ **React 19** - JavaScript library for building user interfaces
- 🔷 **TypeScript** - Typed JavaScript
- 🔄 **Redux Toolkit** - State management with RTK Query
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎯 **shadcn/ui** - Beautiful, accessible component library
- 🎭 **React Router** - Client-side routing
- 🎪 **Lucide Icons** - Beautiful icon library

## Setup Project

```bash
npm i
```

## Run local server
```bash
npm start
```

## Build Application
```bash
npm run build
```

## ENV

Please include a .env in the root folder in below format

```
VITE_API_BASE_URL='http://localhost/api'
```

## Using shadcn/ui Components

Add components to your project:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

See `SHADCN_GUIDE.md` for detailed usage instructions.

## Project Structure

```
src/
├── components/        # Reusable components
├── constants/         # Constants and theme
├── layout/           # Layout components
├── pages/            # Page components
├── redux/            # Redux store and slices
│   ├── api/         # RTK Query API definitions
│   └── reducers/    # Redux reducers
├── router/          # React Router configuration
├── styles/          # Global styles
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Features

- ✅ TypeScript support
- ✅ Redux Toolkit with RTK Query
- ✅ **Authentication system with token management** 🔐
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ React Router for routing
- ✅ Path aliases (@/ imports)
- ✅ Hot Module Replacement
- ✅ SVG support

## Authentication

This boilerplate includes a complete authentication system:

- 🔐 Token and refresh token management in Redux
- 🔄 Automatic token injection in API requests
- 🎣 Custom `useAuth()` hook for easy usage
- 🔒 TypeScript support with full type safety

See `AUTH_GUIDE.md` for detailed documentation.

### Quick Example

```tsx
import { useAuth } from '@/redux/hooks/useAuth';

function MyComponent() {
  const { isAuthenticated, user, login, logout } = useAuth();

  const handleLogin = async () => {
    await login('user@example.com', 'password');
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user?.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
```

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [Vite Documentation](https://vitejs.dev)
- [Authentication Guide](./AUTH_GUIDE.md) - **Complete auth documentation**