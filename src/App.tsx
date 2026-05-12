import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-200">
      <Navbar />
      <Hero />

      <Skills />
      <Timeline />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;