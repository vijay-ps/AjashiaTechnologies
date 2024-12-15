import Container from '../layout/Container';
import SocialLinks from './SocialLinks';
import FooterLink from './FooterLink';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-dark/90' : 'bg-gray-50/90'} backdrop-blur-md`}>
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className={`text-xl md:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ajashia Technologies
            </h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Empowering innovation through cutting-edge technology solutions and electronic components.
            </p>
            <SocialLinks darkMode={darkMode} />
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
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>support@ajashia.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Tech Street
                <br />
                Silicon Valley, CA 94025
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Ajashia Technologies. All rights reserved.
            </p>
            <ul className="flex flex-wrap justify-center space-x-4">
              <FooterLink href="#" darkMode={darkMode} small>Privacy Policy</FooterLink>
              <FooterLink href="#" darkMode={darkMode} small>Terms of Service</FooterLink>
              <FooterLink href="#" darkMode={darkMode} small>Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;