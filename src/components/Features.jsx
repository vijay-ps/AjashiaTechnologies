import { motion } from 'framer-motion';
import { FiCpu, FiBox, FiUsers, FiCode } from 'react-icons/fi';
import GradientText from './common/GradientText';

const features = [
  {
    icon: FiCpu,
    title: 'Project Kits',
    description: 'Complete DIY kits for innovative projects'
  },
  {
    icon: FiBox,
    title: 'Components',
    description: 'High-quality electronic components'
  },
  {
    icon: FiUsers,
    title: 'Community',
    description: 'Join our growing tech community'
  },
  {
    icon: FiCode,
    title: 'Resources',
    description: 'Tutorials and documentation'
  }
];

const Features = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-dark/50' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GradientText className="text-3xl font-bold mb-4">
            Why Choose Us?
          </GradientText>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover our comprehensive range of solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-dark/80' : 'bg-white'
              } shadow-xl backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300`}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {feature.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;