import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-light text-accent hover:text-accent-muted transition-colors duration-300"
          >
            Neelesh
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-text-secondary hover:text-accent transition-colors duration-300 font-light"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-text-secondary hover:text-accent transition-colors duration-300 font-light"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-text-secondary hover:text-accent transition-colors duration-300 font-light"
            >
              Work
            </button>
            <a 
              href="mailto:neeleshbokkisam@berkeley.edu"
              className="text-text-secondary hover:text-accent transition-colors duration-300 font-light"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-text-secondary hover:text-accent transition-colors duration-300 font-light text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-text-secondary hover:text-accent transition-colors duration-300 font-light text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-text-secondary hover:text-accent transition-colors duration-300 font-light text-left"
              >
                Work
              </button>
              <a 
                href="mailto:neeleshbokkisam@berkeley.edu"
                className="text-text-secondary hover:text-accent transition-colors duration-300 font-light text-left"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;