const Section = ({ children, className = '', darkMode }) => {
  return (
    <section className={`py-16 md:py-20 ${darkMode ? 'bg-dark' : 'bg-white'} ${className}`}>
      {children}
    </section>
  );
};

export default Section;