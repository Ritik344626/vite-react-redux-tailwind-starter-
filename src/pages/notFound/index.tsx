import AppLayout from '@/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* 404 Illustration */}
          <div className="relative">
            <div className="text-9xl md:text-[12rem] font-bold text-slate-200 dark:text-slate-800 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertCircle className="w-24 h-24 md:w-32 md:h-32 text-blue-500 animate-pulse" />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Page Not Found
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>

          {/* Suggestions */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Here's what you can do:
            </h2>
            <ul className="text-left space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Check the URL for typos or errors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Return to the homepage and navigate from there</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Use the navigation menu to find what you need</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => navigate('/')}
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-2 pt-8 opacity-50">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
