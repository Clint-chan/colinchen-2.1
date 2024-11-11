import React, { useRef } from 'react';
import { Menu, X, Download, Mail, Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Awards from './components/Awards';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const chatAssistantRef = useRef(null);

  const scrollToChatAssistant = () => {
    chatAssistantRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToChatAssistant={scrollToChatAssistant}
      />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Education />
        <Awards />
      </main>
      <Footer />
      <div ref={chatAssistantRef}>
        <ChatAssistant />
      </div>
    </div>
  );
};

export default App;
