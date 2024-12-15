const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;