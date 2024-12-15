import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import GradientText from './common/GradientText';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-dark/50' : 'bg-gray-50'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ajashia Technologies
            </h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Empowering innovation through cutting-edge technology solutions and electronic components.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={FiGithub} darkMode={darkMode} />
              <SocialLink href="#" icon={FiTwitter} darkMode={darkMode} />
              <SocialLink href="#" icon={FiLinkedin} darkMode={darkMode} />
              <SocialLink href="#" icon={FiMail} darkMode={darkMode} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <FooterLink href="#" darkMode={darkMode}>Products</FooterLink>
              <FooterLink href="#" darkMode={darkMode}>About Us</FooterLink>
              <FooterLink href="#" darkMode={darkMode}>Contact</FooterLink>
              <FooterLink href="#" darkMode={darkMode}>Blog</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                support@ajashia.com
              </li>
              <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                +1 (555) 123-4567
              </li>
              <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                123 Tech Street
                <br />
                Silicon Valley, CA 94025
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Ajashia Technologies. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <FooterLink href="#" darkMode={darkMode} small>Privacy Policy</FooterLink>
              <FooterLink href="#" darkMode={darkMode} small>Terms of Service</FooterLink>
              <FooterLink href="#" darkMode={darkMode} small>Cookie Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon, darkMode }) => (
  <a
    href={href}
    className={`p-2 rounded-full transition-colors ${
      darkMode 
        ? 'text-gray-300 hover:text-primary' 
        : 'text-gray-600 hover:text-primary'
    }`}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children, darkMode, small }) => (
  <li className="list-none">
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

export default Footer;