const FooterLink = ({ href, children, darkMode, small }) => (
  <li>
    <a
      href={href}
      className={`transition-colors hover:text-primary ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      } ${small ? 'text-sm' : ''}`}
    >
      {children}
    </a>
  </li>
);

export default FooterLink;