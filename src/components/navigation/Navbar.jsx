import { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import Container from '../layout/Container';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-md ${
      darkMode ? 'bg-dark/90' : 'bg-white/90'
    } border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <h1 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-dark'}`}>
              Ajashia Technologies
            </h1>
            
            <div className="hidden sm:flex items-center space-x-4">
              <NavLink href="#home" darkMode={darkMode}>Home</NavLink>
              <NavLink href="#products" darkMode={darkMode}>Products</NavLink>
              <NavLink href="#about" darkMode={darkMode}>About</NavLink>
              <NavLink href="#contact" darkMode={darkMode}>Contact</NavLink>
              <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`ml-2 p-2 rounded-md ${darkMode ? 'text-white' : 'text-dark'}`}
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>
      <MobileMenu isOpen={isOpen} darkMode={darkMode} />
    </nav>
  );
};

export default Navbar;