import React, { useState, useEffect } from 'react';
import { projectData } from './ProjectsSection'; // Import the project data

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  
  // Words to cycle through
  const words = ["Developer", "Designer", "Creator"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedWord === current) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      
      if (isDeleting && displayedWord === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      
      const nextWord = isDeleting
        ? current.substring(0, displayedWord.length - 1)
        : current.substring(0, displayedWord.length + 1);
        
      setDisplayedWord(nextWord);
    }, isDeleting ? 80 : 120);
    
    return () => clearTimeout(timeout);
  }, [displayedWord, currentWordIndex, isDeleting, words]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        
        {/* Left Side - Introduction + Terminal */}
        <div className="flex flex-col text-left">
          <h2 className="text-lg text-gray-400">Hi, I'm Neelesh.</h2>
          <h1 className="text-4xl font-semibold text-gray-200 mt-2">
            I <span className="text-neon-cyan">{displayedWord}</span>.
          </h1>
          <p className="text-gray-400 mt-4 text-lg leading-relaxed">
            Studying Materials Science & Engineering at UC Berkeley.  
            Exploring web development, research, and business analytics.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a href="#projects" className="px-5 py-2 border border-gray-500 text-gray-300 rounded-md hover:bg-gray-800 transition">
              Projects
            </a>
            <a href="#contact" className="px-5 py-2 border border-gray-500 text-gray-300 rounded-md hover:bg-gray-800 transition">
              Contact
            </a>
          </div>

          {/* Terminal Box (Now on the left, under the intro) */}
          <div className="mt-8 w-[280px] opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-background-light border border-neon-cyan/30 rounded-md p-4 shadow-neon-glow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-xs text-text-secondary ml-2">terminal</div>
              </div>
              <div className="font-mono text-xs">
                <div className="text-neon-purple">$ whoami</div>
                <div className="text-neon-cyan">neelesh_bokkisam</div>
                <div className="text-neon-purple">$ skills --top</div>
                <div className="text-neon-cyan">['javascript', 'react', 'python']</div>
                <div className="text-neon-purple">$ status</div>
                <div className="text-neon-cyan">ready_to_collaborate</div>
                <div className="text-neon-purple mt-1">$ <span className="animate-pulse">█</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Display 2 Featured Projects */}
        <div className="text-left">
          <h2 className="text-xl text-gray-300 font-medium mb-4">Selected Projects</h2>
          <div className="space-y-4">
            {projectData.slice(0, 2).map((project) => (
              <div key={project.id} className="p-4 border border-gray-600 rounded-md hover:bg-gray-800 transition">
                <h3 className="text-lg text-gray-200">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a href="#projects" className="text-neon-cyan hover:text-white transition">View All Projects →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
