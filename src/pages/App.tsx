import AppLayout from '@/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Zap, Shield, Code2, Palette, Database } from 'lucide-react';
import { ViteLogo, ReactLogo, TypeScriptLogo, ReduxLogo, TailwindLogo, ShadcnLogo } from '@/components/common/TechStackLogos';

function App() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with Vite for instant HMR and blazing fast builds',
      color: 'text-yellow-500'
    },
    {
      icon: Code2,
      title: 'TypeScript',
      description: 'Fully typed with TypeScript for better DX and fewer bugs',
      color: 'text-blue-500'
    },
    {
      icon: Database,
      title: 'Redux Toolkit',
      description: 'State management with RTK Query for efficient data fetching',
      color: 'text-purple-500'
    },
    {
      icon: Palette,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS with shadcn/ui components',
      color: 'text-cyan-500'
    },
    {
      icon: Shield,
      title: 'Production Ready',
      description: 'Best practices and optimized build configuration',
      color: 'text-green-500'
    },
    {
      icon: Rocket,
      title: 'Modern Stack',
      description: 'React 19, React Router, and the latest tools',
      color: 'text-red-500'
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              <span>Production-Ready Boilerplate</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              Modern React
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Boilerplate
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Kickstart your next project with Vite, React, TypeScript, Redux Toolkit, 
              Tailwind CSS, and shadcn/ui. Built for speed and developer experience.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                <Code2 className="w-5 h-5" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open('https://github.com/Ritik344626')}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Powered By
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 font-semibold text-lg hover:scale-110 transition-transform">
                <ViteLogo />
                Vite
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg hover:scale-110 transition-transform">
                <ReactLogo />
                React
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg hover:scale-110 transition-transform">
                <TypeScriptLogo />
                TypeScript
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg hover:scale-110 transition-transform">
                <ReduxLogo />
                Redux
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg hover:scale-110 transition-transform">
                <TailwindLogo />
                Tailwind
              </div>
              <div className="flex items-center gap-2 font-semibold text-lg hover:scale-110 transition-transform">
                <ShadcnLogo />
                shadcn/ui
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-slate-100 dark:bg-slate-800 rounded-lg ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Quick Start */}
          <Card className="max-w-3xl mx-auto border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Start</CardTitle>
              <CardDescription>Get up and running in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <div className="text-slate-400"># Clone and install</div>
                <div className="text-green-400">npm install</div>
                <div className="mt-2 text-slate-400"># Start dev server</div>
                <div className="text-green-400">npm start</div>
                <div className="mt-2 text-slate-400"># Add shadcn/ui components</div>
                <div className="text-green-400">npx shadcn@latest add button</div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Check out <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">SHADCN_GUIDE.md</code> for detailed documentation.
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-16 text-slate-500 dark:text-slate-400">
            <p className="text-sm">
              Built with ❤️ using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default App
