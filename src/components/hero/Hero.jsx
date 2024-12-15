import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Section from '../layout/Section';
import HeroContent from './HeroContent';

const Hero = ({ darkMode }) => {
  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden" darkMode={darkMode}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent darkMode={darkMode} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px]"
          >
            <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-white/10" />
            <div className={`absolute inset-0 flex items-center justify-center ${darkMode ? 'text-white' : 'text-dark'}`}>
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
                <p className="text-lg">Interactive 3D Preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;