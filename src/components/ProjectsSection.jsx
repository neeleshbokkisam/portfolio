import React, { useState, useEffect } from 'react';

const projectData = [
  {
    id: 1,
    title: "Meta",
    description: "ML Engineering Intern",
    category: "Experience",
    date: "June 2025 – Aug 2025",
    image: "/meta.png",
    link: "https://about.meta.com/",
    featured: true
  },
  {
    id: 2,
    title: "DealMover.ai",
    description: "MLE Intern — financial extraction",
    category: "Experience",
    date: "Aug 2025 – present",
    image: "/fin.png",
    link: "https://dealmover.ai/",
    featured: true
  },
  {
    id: 3,
    title: "Coca-Cola Reyes",
    description: "ML Consultant (contract)",
    category: "Experience",
    date: "Aug 2024 – Mar 2025",
    image: "/coc.png",
    link: "https://www.reyescocacola.com/our-brands",
    featured: true
  },
  {
    id: 4,
    title: "USC NLP Research",
    description: "NLP Research Intern",
    category: "Experience",
    date: "June 2024 – Aug 2024",
    image: "/usc.png",
    link: "https://www.usc.edu/",
    featured: false
  },
  {
    id: 5,
    title: "ProductLead.ai",
    description: "Discord bot for feedback aggregation using NLP",
    category: "Project",
    date: "Ongoing",
    image: "/pro.png",
    featured: true
  },
  {
    id: 6,
    title: "CryptoVault",
    description: "Crypto wallet management system with transaction tracking",
    category: "Project",
    date: "Completed",
    image: "/eth.png",
    link: "https://github.com/neeleshbokkisam/Crypto_wallet",
    featured: false
  },
  {
    id: 7,
    title: "OptionXplore",
    description: "Options pricing tool using Monte Carlo & Black-Scholes models",
    category: "Project",
    date: "Completed",
    image: "/fin.png",
    link: "https://github.com/neeleshbokkisam/option-pricing",
    featured: false
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [visible, setVisible] = useState(false);
  const categories = ['All', 'Experience', 'Project'];

  useEffect(() => {
    setVisible(true);
  }, []);

  const filteredProjects = filter === 'All'
    ? projectData
    : projectData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 border border-accent/5 rotate-45"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-accent/10 -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Creative section header with cool effects */}
        <div className="relative mb-20 group">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-accent/30 group-hover:border-accent transition-colors duration-500"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-accent/20 group-hover:border-accent transition-colors duration-500"></div>
          
          <div className="text-center relative">
            {/* Animated background elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 border border-accent/10 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 border border-accent/15 rounded-full animate-pulse"></div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-light text-accent mb-6 relative group-hover:transform group-hover:scale-105 transition-all duration-500 tracking-tight">
              <span className="block group-hover:text-accent-muted transition-colors duration-300">Work &</span>
              <span className="block text-3xl md:text-5xl text-text-secondary ml-8 group-hover:text-accent transition-colors duration-500 font-light">
                Projects
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className="w-24 h-0.5 bg-accent mx-auto mb-6 group-hover:w-32 group-hover:bg-accent-muted transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-accent/60 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-200"></div>
            </div>
            
            <p className="text-text-secondary max-w-2xl mx-auto text-lg group-hover:text-accent-muted transition-colors duration-500">
              Professional experience and personal projects that showcase my passion for technology
            </p>
            
            {/* Floating accent elements */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-accent/40 rounded-full animate-pulse group-hover:animate-bounce"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse delay-1000 group-hover:animate-bounce delay-300"></div>
          </div>
        </div>

        {/* Cool filter buttons with creative effects */}
        <div className="flex justify-center gap-8 mb-20">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`relative group px-8 py-4 font-medium transition-all duration-300 hover:transform hover:scale-110 hover:-translate-y-2 ${
                filter === category
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-accent'
              }`}
              style={{ transform: `rotate(${index * 2 - 2}deg)` }}
            >
              {/* Background effects */}
              <div className={`absolute inset-0 border border-accent/20 rounded-lg transition-all duration-300 ${
                filter === category 
                  ? 'border-accent bg-accent/10' 
                  : 'group-hover:border-accent/40 group-hover:bg-accent/5'
              }`}></div>
              
              {/* Animated underline */}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ${
                filter === category ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
              
              {/* Floating particles on hover */}
              <div className="absolute -top-2 -right-2 w-1 h-1 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-0.5 h-0.5 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-200 transition-all duration-300"></div>
              
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Cool stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="text-4xl font-light text-accent mb-2 group-hover:scale-110 transition-transform duration-300">6+</div>
            <div className="text-text-secondary group-hover:text-accent transition-colors duration-300">Projects</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-light text-accent mb-2 group-hover:scale-110 transition-transform duration-300">4</div>
            <div className="text-text-secondary group-hover:text-accent transition-colors duration-300">Companies</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-light text-accent mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
            <div className="text-text-secondary group-hover:text-accent transition-colors duration-300">Years Experience</div>
          </div>
        </div>

        {/* All projects with consistent horizontal layout */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <CreativeProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* Call to action section */}
        <div className="mt-20 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-4 border border-accent/20 rotate-2 group-hover:rotate-4 transition-transform duration-500"></div>
            <div className="absolute -inset-2 border border-accent/10 -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
            
            <div className="relative bg-background-light/20 border border-accent/30 p-8 rounded-lg group-hover:border-accent/50 transition-all duration-300">
              <h3 className="text-2xl font-light text-accent mb-4 group-hover:text-accent-muted transition-colors duration-300">
                Interested in working together?
              </h3>
              <p className="text-text-secondary mb-6 group-hover:text-accent-muted transition-colors duration-300">
                Let's discuss your next project or explore opportunities.
              </p>
              <a
                href="mailto:neeleshbokkisam@berkeley.edu"
                className="inline-block px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const CreativeProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`group relative ${isEven ? 'lg:ml-16' : 'lg:mr-16'} hover:transform hover:scale-[1.02] transition-all duration-500`}>
      {/* Creative background elements */}
      <div className="absolute -inset-2 border border-accent/10 rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
      <div className="absolute -inset-4 border border-accent/5 rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
      
      {/* Floating accent elements */}
      <div className="absolute -top-2 -right-2 w-2 h-2 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
      <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-200 transition-all duration-300"></div>
      
      <div className="relative bg-background-light/20 border border-accent/20 rounded-lg overflow-hidden hover:border-accent/40 transition-all duration-500 hover:transform hover:scale-102 hover:rotate-1 hover:shadow-lg group-hover:bg-background-light/30">
        <div className="flex flex-col md:flex-row">
          {/* Image with creative positioning */}
          <div className={`w-full md:w-48 h-32 flex-shrink-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative"
            />
            {/* Image overlay effect */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500"></div>
          </div>
          
          {/* Content with creative layout */}
          <div className={`flex-1 p-6 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-xl font-medium text-accent group-hover:text-accent-muted transition-colors">
                {project.title}
              </h3>
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {project.category}
              </span>
            </div>
            
            <p className="text-text-secondary mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-text-secondary text-sm">{project.date}</span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-muted transition-colors font-medium group-hover:transform group-hover:scale-110 group-hover:translate-x-2"
                >
                  View →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;