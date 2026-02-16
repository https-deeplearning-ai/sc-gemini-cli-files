import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { 
  loadHome, 
  loadAbout, 
  loadWeekAtAGlance, 
  loadCatalog, 
  loadSponsors, 
  loadRegistration, 
  loadTravelAndHotels,
  loadSocials
} from '../lazyLoad';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navigation = [
    { name: 'Home', href: '/', prefetch: loadHome },
    { name: 'About', href: '/about', prefetch: loadAbout },
    { name: 'Schedule', href: '/schedule', prefetch: loadWeekAtAGlance },
    { name: 'Session Catalog', href: '/catalog', prefetch: loadCatalog },
    { name: 'Sponsors', href: '/sponsors', prefetch: loadSponsors },
    { name: 'Registration', href: '/registration', prefetch: loadRegistration },
    { name: 'Travel', href: '/travel', prefetch: loadTravelAndHotels },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link 
                to="/" 
                className="flex items-center gap-2 group"
                onMouseEnter={() => loadHome()}
              >
                <BrainCircuit className="h-8 w-8 text-primary-600 dark:text-primary-400 group-hover:rotate-12 transition-transform" />
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                  TechStack Conference <span className="text-primary-600 dark:text-primary-400">2026</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onMouseEnter={() => item.prefetch && item.prefetch()}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400',
                    location.pathname === item.href
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-400'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Link
                to="/registration"
                onMouseEnter={() => loadRegistration()}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-lg shadow-primary-500/20"
              >
                Register Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-4">
               <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onMouseEnter={() => item.prefetch && item.prefetch()}
                  className={clsx(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    location.pathname === item.href
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                 <Link 
                   to="/registration"
                   onMouseEnter={() => loadRegistration()}
                   className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                   onClick={() => setIsMenuOpen(false)}
                 >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-slate-400" />
              <span className="text-slate-500 font-semibold">TechStack Conference</span>
            </div>
            <div className="flex items-center gap-8">
              <Link 
                to="/socials" 
                onMouseEnter={() => loadSocials()}
                className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors"
              >
                Social Kit
              </Link>
              <p className="text-slate-400 text-sm">
                © 2026 Fictitious AI Conference. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};