import React, { useState, useEffect } from 'react';
import { projectData } from './ProjectsSection'; // Import the project data
import profilePic from '../../pic.png';


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
      <div className="md:w-1/2 sticky top-14 self-start">

        <div className="flex items-center space-x-6">
          {/* Profile Picture */}
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-gray-600 shadow-lg"
          />

          {/* Name Section */}
          <div>
            <h2 className="text-lg text-gray-400">Hi, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-cyan via-[40%] via-neon-blue via-[60%] via-neon-pink via-[80%] via-neon-orange to-neon-purple bg-clip-text text-transparent">
  Neelesh Bokkisam.
</h1>


          </div>
        </div>

        <h1 className="text-4xl font-semibold text-gray-200 mt-4">
          I <span className="text-neon-cyan">{displayedWord}</span>.
        </h1>
        <p className="text-gray-400 mt-2 text-lg leading-relaxed">
          Studying EECS & IEOR at UC Berkeley.  
          Exploring artificial intelligence, machine learning, software engineering, NLP, algorithms, and high frequency trading.  
          :)

        </p>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-6">
          <a href="https://github.com/neeleshbokkisam" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 flex justify-center items-center rounded-full bg-background-light border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300">
            {/* GitHub SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a href="https://linkedin.com/in/neeleshbokkisam" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 flex justify-center items-center rounded-full bg-background-light border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300">
            {/* LinkedIn SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a href="https://instagram.com/neeleshbokkisam" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 flex justify-center items-center rounded-full bg-background-light border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300">
            {/* Instagram SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a href="mailto:neeleshbokkisam@berkeley.edu"
            className="w-10 h-10 flex justify-center items-center rounded-full bg-background-light border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300">
            {/* Gmail SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 6 12 13 2 6"></path>
              <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
            </svg>
          </a>
        </div>



        {/* Terminal Box */}
        <div className="mt-8 w-[480px] opacity-70 hover:opacity-100 transition-opacity duration-300">
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
