'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-2 border-gray-200 dark:border-gray-400"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-7 h-7 text-slate-100" />
      ) : (
        <SunIcon className="w-7 h-7 text-yellow-500" />
      )}
    </button>
  );
}