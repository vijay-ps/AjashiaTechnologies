import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className={`p-2 rounded-full transition-colors ${
      darkMode 
        ? 'text-gray-300 hover:bg-gray-800' 
        : 'text-gray-700 hover:bg-gray-100'
    }`}
    aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
  >
    {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
  </button>
);

export default ThemeToggle;