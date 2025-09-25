import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-accent font-light">
            Neelesh Bokkisam
          </div>

          {/* Social Links */}
          <div className="flex gap-8">
            <a 
              href="https://github.com/neeleshbokkisam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/neeleshbokkisam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:neeleshbokkisam@berkeley.edu"
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;