import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  // Cycle through themes: light → dark → system → light...
  const cycleTheme = () => {
    const themeOrder: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  // Get the appropriate icon and title
  const getThemeInfo = () => {
    switch (theme) {
      case 'light':
        return {
          icon: <Sun className="w-5 h-5" />,
          title: 'Switch to dark mode'
        };
      case 'dark':
        return {
          icon: <Moon className="w-5 h-5" />,
          title: 'Switch to system mode'
        };
      case 'system':
        return {
          icon: <Monitor className="w-5 h-5" />,
          title: `Switch to light mode (currently ${actualTheme})`
        };
      default:
        return {
          icon: <Sun className="w-5 h-5" />,
          title: 'Switch theme'
        };
    }
  };

  const { icon, title } = getThemeInfo();

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
      title={title}
    >
      {icon}
    </button>
  );
};

export default ThemeToggle;