import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/redux/hooks/useAuth';
import { LogIn, LogOut, User, KeyRound } from 'lucide-react';

/**
 * Example component demonstrating how to use the auth system
 * 
 * Usage:
 * - Import useAuth hook
 * - Call login() with email and password
 * - Access user data and token from the hook
 * - Call logout() to clear auth state
 */
const AuthExample = () => {
  const {
    isAuthenticated,
    user,
    token,
    login,
    logout,
    isLoggingIn,
    isLoggingOut,
    loginError,
  } = useAuth();

  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = async () => {
    try {
      await login(email, password);
      console.log('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    await logout();
    console.log('Logged out successfully!');
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <KeyRound className="w-6 h-6" />
            Authentication Example
          </CardTitle>
          <CardDescription>
            This demonstrates the Redux-based auth system with token management
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Auth Status */}
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Status
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">Authenticated:</span>
                <span className={isAuthenticated ? 'text-green-600' : 'text-red-600'}>
                  {isAuthenticated ? '✓ Yes' : '✗ No'}
                </span>
              </div>
              {user && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">User:</span>
                    <span>{user.name} ({user.email})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">User ID:</span>
                    <span className="font-mono text-xs">{user.id}</span>
                  </div>
                </>
              )}
              {token && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">Token:</span>
                  <span className="font-mono text-xs truncate max-w-xs">
                    {token.substring(0, 20)}...
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Login Form or User Info */}
          {!isAuthenticated ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900"
                  placeholder="user@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900"
                  placeholder="Enter password"
                />
              </div>
              {loginError && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-md text-sm">
                  Login failed. Please check your credentials.
                </div>
              )}
              <Button
                onClick={handleLogin}
                disabled={isLoggingIn}
                className="w-full gap-2"
              >
                <LogIn className="w-4 h-4" />
                {isLoggingIn ? 'Logging in...' : 'Login'}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                <p className="font-semibold">Welcome back, {user?.name}!</p>
                <p className="text-sm mt-1">You are successfully authenticated.</p>
              </div>
              <Button
                onClick={handleLogout}
                disabled={isLoggingOut}
                variant="destructive"
                className="w-full gap-2"
              >
                <LogOut className="w-4 h-4" />
                {isLoggingOut ? 'Logging out...' : 'Logout'}
              </Button>
            </div>
          )}

          {/* Usage Guide */}
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2 text-sm">How to use in your components:</h3>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-xs overflow-x-auto">
              <div className="text-green-400">// Import the hook</div>
              <div>import {'{ useAuth }'} from '@/redux/hooks/useAuth';</div>
              <div className="mt-2 text-green-400">// Use in component</div>
              <div>const {'{ isAuthenticated, user, login, logout }'} = useAuth();</div>
              <div className="mt-2 text-green-400">// Login</div>
              <div>await login('user@example.com', 'password');</div>
              <div className="mt-2 text-green-400">// Logout</div>
              <div>await logout();</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthExample;
