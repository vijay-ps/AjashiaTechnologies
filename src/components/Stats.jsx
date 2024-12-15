import { motion } from 'framer-motion';
import GradientText from './common/GradientText';

const stats = [
  { number: '1000+', label: 'Products' },
  { number: '50K+', label: 'Customers' },
  { number: '99%', label: 'Satisfaction' },
  { number: '24/7', label: 'Support' }
];

const Stats = ({ darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <GradientText className="text-4xl font-bold mb-2">
                {stat.number}
              </GradientText>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;