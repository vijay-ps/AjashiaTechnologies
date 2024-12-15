import { useState } from "react";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Footer from "./components/footer/Footer";

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-dark" : "bg-white"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <Stats darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Home;
