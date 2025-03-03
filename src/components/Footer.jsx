import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-light py-12 border-t border-neon-cyan/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo section */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Neelesh.
              </span>
            </a>
            <p className="text-text-secondary mt-4 max-w-xs">
              Creating digital experiences that blend design and functionality for the future.
            </p>
            
            <div className="flex gap-4 mt-6">
              <SocialLink icon="github" />
              <SocialLink icon="twitter" />
              <SocialLink icon="linkedin" />
              <SocialLink icon="instagram" />
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#projects">Projects</FooterLink>
              </li>
              <li>
                <FooterLink href="#skills">Skills</FooterLink>
              </li>
              <li>
                <FooterLink href="#about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="#contact">Contact</FooterLink>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            
            <a 
              href="mailto:neeleshbokkisam@berkeley.edu" 
              className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>neeleshbokkisam@berkeley.edu</span>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neon-cyan/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Neelesh Bokkisam. All rights reserved.
          </p>
          
          <p className="text-text-secondary text-sm mt-2 md:mt-0">
            <span className="text-neon-cyan">Designed & Built with ❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon }) => {
  const icons = {
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  };

  return (
    <a href="#" className="w-10 h-10 flex justify-center items-center rounded-full bg-background-light border border-neon-cyan/20 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300">
      {icons[icon]}
    </a>
  );
};

const FooterLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-text-secondary hover:text-neon-cyan transition-colors duration-300"
  >
    {children}
  </a>
);

export default Footer;