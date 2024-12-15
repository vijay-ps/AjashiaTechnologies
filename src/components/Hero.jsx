import { motion } from 'framer-motion';
import Button from './common/Button';
import GradientText from './common/GradientText';

const Hero = ({ darkMode }) => {
  return (
    <section className={`min-h-screen flex items-center relative overflow-hidden ${darkMode ? 'bg-dark' : 'bg-white'}`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-dark'}`}>
              Welcome to{' '}
              <GradientText>Ajashia Technologies</GradientText>
            </h1>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Your one-stop destination for project kits and electronic components.
              Empowering students, enthusiasts, and professionals with cutting-edge technology.
            </p>
            <div className="space-x-4">
              <Button variant="primary">
                Explore Products
              </Button>
              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px]"
          >
            <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-white/10" />
            <div className={`absolute inset-0 flex items-center justify-center ${darkMode ? 'text-white' : 'text-dark'}`}>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
                <p className="text-lg">Interactive 3D Preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;