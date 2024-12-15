import { motion } from 'framer-motion';
import Button from '../common/Button';
import GradientText from '../common/GradientText';

const HeroContent = ({ darkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center md:text-left"
  >
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-dark'}`}>
      Welcome to{' '}
      <GradientText>Ajashia Technologies</GradientText>
    </h1>
    <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      Your one-stop destination for project kits and electronic components.
      Empowering students, enthusiasts, and professionals with cutting-edge technology.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
      <Button variant="primary">
        Explore Products
      </Button>
      <Button variant="secondary">
        Learn More
      </Button>
    </div>
  </motion.div>
);

export default HeroContent;