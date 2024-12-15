const NavLink = ({ href, children, darkMode, mobile = false }) => {
  const baseStyles = mobile
    ? 'block w-full px-4 py-2 text-base'
    : 'px-3 py-2 text-sm';

  return (
    <a
      href={href}
      className={`${baseStyles} rounded-md font-medium transition-colors ${
        darkMode 
          ? 'text-gray-300 hover:text-primary hover:bg-gray-800' 
          : 'text-gray-700 hover:text-primary hover:bg-gray-100'
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;