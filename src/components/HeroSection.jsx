import React, { useState, useEffect } from 'react';
import profilePic from '../../pic.png';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedWord, setDisplayedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["Developer", "Researcher", "Innovator"];

  useEffect(() => {
    const current = words[currentWord];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedWord === current) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && displayedWord === '') {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
        return;
      }

      const nextWord = isDeleting
        ? current.substring(0, displayedWord.length - 1)
        : current.substring(0, displayedWord.length + 1);

      setDisplayedWord(nextWord);
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayedWord, currentWord, isDeleting, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/10 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-accent/15 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-accent/10 -rotate-12"></div>
        
        {/* Subtle floating dots - reduced animations */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-accent/30 rounded-full hover:bg-accent/60 hover:scale-150 transition-all duration-200 cursor-pointer"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/40 rounded-full hover:bg-accent/70 hover:scale-200 transition-all duration-200 cursor-pointer"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-accent/25 rounded-full hover:bg-accent/50 hover:scale-150 transition-all duration-200 cursor-pointer"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="space-y-8">
          {/* Greeting with creative styling */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-accent/50"></div>
            <div className="text-lg text-accent font-mono">Hello, I'm</div>
          </div>

          {/* Name with cool animations */}
          <div className="relative group">
            <h1 className="text-6xl md:text-8xl font-heading font-light text-accent leading-tight tracking-tight group-hover:transform group-hover:scale-105 transition-all duration-500">
              <span className="block group-hover:text-accent-muted transition-colors duration-300 hover:transform hover:translate-x-2 hover:skew-x-2 transition-all duration-300 cursor-default">
                Neelesh
              </span>
              <span className="block text-4xl md:text-6xl text-text-secondary ml-8 group-hover:text-accent transition-colors duration-500 hover:transform hover:translate-x-4 hover:skew-x-1 transition-all duration-300 cursor-default font-light">
                Bokkisam
              </span>
            </h1>
            
            {/* Animated decorative line */}
            <div className="absolute -bottom-4 left-0 w-24 h-0.5 bg-accent group-hover:w-32 group-hover:bg-accent-muted transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-accent/60 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-200"></div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-accent/40 rounded-full animate-pulse group-hover:animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse delay-1000 group-hover:animate-bounce delay-300"></div>
          </div>

          {/* Animated role with creative container */}
          <div className="relative">
            <div className="inline-block px-6 py-3 border border-accent/30 bg-background-light/50 backdrop-blur-sm">
              <span className="text-xl text-text-secondary">
                I am a <span className="text-accent font-medium">{displayedWord}</span>
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>


          {/* CTA Buttons with creative layout */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group relative px-8 py-4 border-2 border-accent text-accent font-medium transition-all duration-300 hover:bg-accent hover:text-background hover:transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="mailto:neeleshbokkisam@berkeley.edu"
              className="px-8 py-4 border border-border text-text-secondary font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:transform hover:scale-105 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links with creative styling */}
          <div className="flex gap-6">
            {[
              { name: 'GitHub', href: 'https://github.com/neeleshbokkisam' },
              { name: 'LinkedIn', href: 'https://linkedin.com/in/neeleshbokkisam' },
              { name: 'Email', href: 'mailto:neeleshbokkisam@berkeley.edu' }
            ].map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-text-secondary hover:text-accent transition-all duration-300 hover:transform hover:scale-110 hover:-translate-y-1"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Creative Profile Section */}
        <div className="relative flex justify-center items-center">
          {/* Main profile image with creative frame */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-accent/20 rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute -inset-2 border border-accent/40 -rotate-2 group-hover:-rotate-4 transition-transform duration-500"></div>
            <img
              src={profilePic}
              alt="Neelesh Bokkisam"
              className="relative w-56 h-56 object-cover border-2 border-accent group-hover:scale-105 transition-transform duration-500"
            />
            {/* Floating elements around image */}
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Separate floating info elements */}
          
          {/* Education card */}
          <div className="absolute -bottom-12 -left-4 bg-background-light/80 backdrop-blur-sm border border-accent/20 p-3 max-w-xs group hover:border-accent/40 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-accent/30"></div>
            <div className="text-text-secondary text-xs">
              <span className="text-accent font-medium">EECS & IEOR</span> at UC Berkeley
            </div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-accent/30 rounded-full animate-pulse"></div>
          </div>

          {/* Passion card */}
          <div className="absolute -top-8 -right-8 bg-background-light/80 backdrop-blur-sm border border-accent/20 p-3 max-w-xs group hover:border-accent/40 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1">
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-accent/30"></div>
            <div className="text-text-secondary text-xs">
              Passionate about <span className="text-accent font-medium">AI & ML</span>
            </div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-accent/30 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Location card */}
          <div className="absolute top-1/2 -right-8 bg-background-light/80 backdrop-blur-sm border border-accent/20 p-2 max-w-xs group hover:border-accent/40 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1">
            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-l border-t border-accent/30"></div>
            <div className="text-text-secondary text-xs">
              <span className="text-accent font-medium">Berkeley, CA</span>
            </div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;