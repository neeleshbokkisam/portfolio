import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter group">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent group-hover:animate-text-shimmer transition duration-300">
            Neelesh.
          </span>
          <span className="text-neon-cyan">_</span>
        </a>

        {/* Desktop Menu
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">
            <button className="px-4 py-2 border border-neon-cyan text-neon-cyan rounded-sm hover:bg-neon-cyan/10 transition duration-300 flex items-center gap-2">
              <span>Connect</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </button>
          </NavLink>
        </nav> */}

        {/* Mobile Menu Button
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-text-primary p-2 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button> */}

        {/* Mobile Menu
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background-light/95 backdrop-blur-lg p-4 flex flex-col gap-4 md:hidden border-t border-neon-cyan/20">
            <NavLink href="#projects" mobile onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#skills" mobile onClick={() => setMobileMenuOpen(false)}>Skills</NavLink>
            <NavLink href="#about" mobile onClick={() => setMobileMenuOpen(false)}>About</NavLink>
            <NavLink href="#contact" mobile onClick={() => setMobileMenuOpen(false)}>Connect</NavLink>
          </div>
        )} */}
      </div>
    </header>
  );
};

const NavLink = ({ href, children, mobile = false, onClick }) => (
  <a 
    href={href} 
    className={`group relative transition duration-300 ${
      mobile ? 'text-lg py-2' : ''
    }`}
    onClick={onClick}
  >
    <span className="text-text-secondary hover:text-neon-cyan transition-colors duration-300">{children}</span>
    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-cyan transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default Navbar;