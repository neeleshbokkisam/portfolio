import React, { useState, useEffect } from 'react';
import { projectData } from './ProjectsSection'; // Import the project data

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Words to cycle through
  const words = ["Develop", "Design", "Create"];
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
    <section className="relative flex flex-col md:flex-row max-w-6xl mx-auto px-6 pt-24 min-h-screen">
      
      {/* Left Side - Fixed */}
      <div className="md:w-1/2 sticky top-24 self-start">
        <h2 className="text-lg text-gray-400">Hi, I'm Neelesh.</h2>
        <h1 className="text-4xl font-semibold text-gray-200 mt-2">
          I <span className="text-neon-cyan">{displayedWord}</span>.
        </h1>
        <p className="text-gray-400 mt-4 text-lg leading-relaxed">
          Studying EECS & IEOR at UC Berkeley.  
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

        {/* Terminal Box */}
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

      {/* Right Side - Scrollable Projects with Dates & Hover Effect */}
<div className="md:w-1/2 overflow-y-auto max-h-screen p-4">
  <h2 className="text-xl text-gray-300 font-medium mb-4">Experience & Projects</h2>
  <div className="space-y-6">
    {projectData.map((project, index) => (
      <div key={project.id} className="relative flex items-start justify-between gap-4">

        {/* Date - Left Aligned */}
        <div className="text-gray-400 text-xs font-medium text-right w-[58px] flex-none">
          {project.date}
        </div>

        {/* Project Tile - Right Aligned */}
        <article 
          className="group relative bg-background-light border border-neon-cyan/20 rounded-md overflow-hidden h-[220px] flex-grow max-w-[600px] transition-all duration-500"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-5000 transition-opacity duration-500"></div>
          </div>

          {/* Category Tag */}
          <div className="absolute top-4 right-4 bg-neon-purple/80 text-white text-xs px-3 py-1 rounded-full z-10 backdrop-blur-sm">
            {project.category}
          </div>

          {/* Title - Moves from Center to Top-Left */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-6 z-10 
            transition-all duration-500 ease-in-out">
              <h3 className="text-lg font-extrabold text-text-primary font-sans transition-all duration-500 ease-in-out transform
                group-hover:translate-y-[-275%] group-hover:translate-x-[-21%]">
                {project.title}
              </h3>
            </div>

          {/* Other Details - Stays Hidden Until Hover */}
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-text-secondary mb-4 text-sm">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-background/50 text-neon-cyan text-xs rounded border border-neon-cyan/30">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons - Properly Centered */}
          <div className="flex justify-center gap-6">
            <button className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors">
              <span>View Details</span>
            </button>
            <div className="w-px h-5 bg-text-secondary/30 self-center"></div>
            <button className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
              <span>Demo</span>
            </button>
          </div>
        </div>
        </article>
      </div>
    ))}
  </div>
</div>


    </section>
  );
};

export default HeroSection;
