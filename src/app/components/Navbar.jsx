'use client';

import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { language } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        <h1 className="text-2xl font-semibold tracking-tight text-green-700 dark:text-green-400">
          Dev Quotes.
        </h1>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
