import NavLink from './NavLink';

const MobileMenu = ({ isOpen, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="sm:hidden">
      <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-md ${
        darkMode ? 'bg-dark/90' : 'bg-white/90'
      }`}>
        <NavLink href="#home" darkMode={darkMode} mobile>Home</NavLink>
        <NavLink href="#products" darkMode={darkMode} mobile>Products</NavLink>
        <NavLink href="#about" darkMode={darkMode} mobile>About</NavLink>
        <NavLink href="#contact" darkMode={darkMode} mobile>Contact</NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;