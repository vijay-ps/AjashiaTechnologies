import { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-md ${darkMode ? 'bg-dark/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-1 flex items-center justify-center sm:justify-between">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-dark'}`}>
                Ajashia Technologies
              </h1>
            </div>
            
            <div className="hidden sm:block">
              <div className="flex items-center space-x-4">
                <NavLink darkMode={darkMode} href="#home">Home</NavLink>
                <NavLink darkMode={darkMode} href="#products">Products</NavLink>
                <NavLink darkMode={darkMode} href="#about">About</NavLink>
                <NavLink darkMode={darkMode} href="#contact">Contact</NavLink>
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                >
                  {darkMode ? <FiSun className="text-white" /> : <FiMoon />}
                </button>
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${darkMode ? 'text-white' : 'text-dark'}`}
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-md ${darkMode ? 'bg-dark/80' : 'bg-white/80'}`}>
            <MobileNavLink darkMode={darkMode} href="#home">Home</MobileNavLink>
            <MobileNavLink darkMode={darkMode} href="#products">Products</MobileNavLink>
            <MobileNavLink darkMode={darkMode} href="#about">About</MobileNavLink>
            <MobileNavLink darkMode={darkMode} href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, darkMode }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      darkMode 
        ? 'text-gray-300 hover:text-primary' 
        : 'text-gray-700 hover:text-primary'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, darkMode }) => (
  <a
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      darkMode 
        ? 'text-gray-300 hover:text-primary' 
        : 'text-gray-700 hover:text-primary'
    }`}
  >
    {children}
  </a>
);

export default Navbar;