import React, { useState } from 'react';

const projectData = [
  // Experience
  {
    id: 1,
    title: "Meta",
    description: "Incoming Software Engineering Intern",
    category: "Experience",
    techStack: ["Software Engineering"],
    date: "June 2025 – Aug 2025",
    image: "/meta.png",
    link: "https://about.meta.com/",
  },
  {
    id: 2,
    title: "Coca-Cola Reyes",
    description: "Technical ML Consultant (contract)",
    category: "Experience",
    techStack: ["NLP", "AWS", "Python", "PostgreSQL"],
    date: "Aug 2024 – Current",
    image: "/coc.png",
    link: "https://www.reyescocacola.com/our-brands",
  },
  {
    id: 3,
    title: "USC NLP Research",
    description: "NLP Research Intern",
    category: "Experience",
    techStack: ["LLMs", "Information Retrieval"],
    date: "June 2024 – Aug 2024",
    image: "/usc.png",
    link: "https://www.usc.edu/",
  },
  {
    id: 4,
    title: "Core & MSN Pharma",
    description: "R&D Research Intern",
    category: "Experience",
    techStack: ["MERN", "AWS S3", "HIPAA Compliance"],
    date: "April 2023 – June 2023",
    image: "/core.png",
    // link: "https://www.coreandmsnpharma.com/",
  },

  // Projects
  {
    id: 5,
    title: "ProductLead.ai",
    description: "Building a Discord bot for feedback aggregation and analysis.",
    category: "Project",
    techStack: ["Python", "NLP", "Flask", "Redis"],
    date: "Ongoing",
    image: "/pro.png",
    // link: "https://github.com/neeleshbokkisam/ProductLead.ai",
  },
  {
    id: 6,
    title: "CryptoVault",
    description: "Developed a crypto wallet management system with transaction tracking.",
    category: "Project",
    techStack: ["Node.js", "Ethers.js", "Web3.js"],
    date: "Completed",
    image: "/eth.png",
    link: "https://github.com/neeleshbokkisam/Crypto_wallet",
  },
  {
    id: 7,
    title: "OptionXplore",
    description: "Built an options pricing tool using Monte Carlo & Black-Scholes models.",
    category: "Project",
    techStack: ["Python", "NumPy", "Flask"],
    date: "Completed",
    image: "/fin.png",
    link: "https://github.com/neeleshbokkisam/option-pricing",
  },
  {
    id: 8,
    title: "Mouse",
    description: "Move cursor and click using pointer finger.",
    category: "Project",
    techStack: ["OpenCV", "MediaPipe", "PyAutoGui"],
    date: "Completed",
    image: "/mouse.png",
    link: "https://github.com/neeleshbokkisam/mouse",
  }
];



const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projectData.map(project => project.category))];

  const filteredProjects = filter === 'All'
    ? projectData
    : projectData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Section heading with gradient underline */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
          A showcase of my research and development work across various domains.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${filter === category
                ? 'bg-neon-cyan text-background shadow-neon-glow'
                : 'bg-background-light text-text-secondary hover:text-neon-cyan'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>

      {/* More projects button */}
      <div className="text-center mt-12">
        <button className="group relative px-6 py-3 bg-background-light border border-neon-cyan rounded-sm overflow-hidden hover:shadow-neon-glow transition duration-300">
          <span className="relative z-10 text-neon-cyan group-hover:text-background transition duration-300">View All Projects</span>
          <span className="absolute inset-0 bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <article
      className="group relative bg-background-light border border-neon-cyan/20 rounded-md overflow-hidden h-[400px] transform transition-all duration-500"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <span className="inline-block px-3 py-1 bg-neon-purple/80 text-white text-xs rounded-full mb-3 backdrop-blur-sm">
          {project.category}
        </span>


        <h3 className="text-2xl font-extrabold text-white group-hover:text-neon-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300">{project.description}</p>


        <p className={`text-text-secondary mb-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-1 bg-background/50 text-neon-cyan text-xs rounded backdrop-blur-sm border border-neon-cyan/30">
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className={`flex gap-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
          <button className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors">
            <span>View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <div className="w-px h-5 bg-text-secondary/30 self-center"></div>
          <button className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
            <span>Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 border-t-2 border-r-2 border-neon-cyan w-8 h-8 opacity-70"></div>
      <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-neon-cyan w-8 h-8 opacity-70"></div>
    </article>
  );
};
export { projectData };

export default ProjectsSection;