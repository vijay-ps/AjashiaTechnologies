import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: '#', label: 'GitHub' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiMail, href: '#', label: 'Email' },
];

const SocialLinks = ({ darkMode }) => (
  <div className="flex space-x-4">
    {socialLinks.map(({ icon: Icon, href, label }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        className={`p-2 rounded-full transition-colors ${
          darkMode 
            ? 'text-gray-300 hover:text-primary hover:bg-gray-800' 
            : 'text-gray-600 hover:text-primary hover:bg-gray-100'
        }`}
      >
        <Icon className="w-5 h-5" />
      </a>
    ))}
  </div>
);

export default SocialLinks;