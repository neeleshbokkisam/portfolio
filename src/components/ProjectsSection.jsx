import React, { useState } from 'react';

const projectData = [
  {
    id: 1,
    title: "Neuroscience AI Research",
    description: "AI-powered analysis of neural pathways with interactive visualization components.",
    category: "Research",
    techStack: ["Python", "TensorFlow", "D3.js"],
    date: "May 2023 – Present",
    image: "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwyfHxoZXJvJTIwc2VjdGlvbiUyQyUyMHByb2plY3QlMjBjYXJkc3xlbnwwfHx8fDE3NDA1NTkyODd8MA&ixlib=rb-4.0.3?w=600&h=1024"
  },
  {
    id: 2,
    title: "Quantum Computing Interface",
    description: "User-friendly dashboard for quantum computing simulations and visualizations.",
    category: "Development",
    techStack: ["React", "Node.js", "WebGL"],
    date: "May 2023 – Present",
    image: "https://images.unsplash.com/photo-1586370740632-f910eb4ad077?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHw1fHxoZXJvJTIwc2VjdGlvbiUyQyUyMHByb2plY3QlMjBjYXJkc3xlbnwwfHx8fDE3NDA1NTkyODd8MA&ixlib=rb-4.0.3?w=600&h=1024"
  },
  {
    id: 3,
    title: "Biotech Data Platform",
    description: "Comprehensive platform for analyzing and visualizing biotechnology research data.",
    category: "Development",
    techStack: ["Vue.js", "GraphQL", "D3.js"],  
    date: "May 2023 – Present",
    image: "https://images.unsplash.com/photo-1559752562-1513aa167782?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwzfHxoZXJvJTIwc2VjdGlvbiUyQyUyMHByb2plY3QlMjBjYXJkc3xlbnwwfHx8fDE3NDA1NTkyODd8MA&ixlib=rb-4.0.3?w=600&h=1024"
  },
  {
    id: 4,
    title: "Neural Interface System",
    description: "Revolutionary system for human-computer interaction using neural signals.",
    category: "Research",
    techStack: ["C++", "Python", "CUDA"],
    date: "May 2023 – Present",
    image: "https://images.unsplash.com/photo-1576495350634-755e6560d431?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwxMHx8aGVybyUyMHNlY3Rpb24lMkMlMjBwcm9qZWN0JTIwY2FyZHN8ZW58MHx8fHwxNzQwNTU5Mjg3fDA&ixlib=rb-4.0.3?w=600&h=1024"
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
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
              filter === category 
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
        <div className={`absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 transition-opacity duration-300 ${isHovered ? 'opacity-90' : ''}`}></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <span className="inline-block px-3 py-1 bg-neon-purple/80 text-white text-xs rounded-full mb-3 backdrop-blur-sm">
          {project.category}
        </span>
        
        <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
        
        <p className={`text-text-secondary mb-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-1 bg-background/50 text-neon-cyan text-xs rounded backdrop-blur-sm border border-neon-cyan/30">
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className={`flex gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors">
            <span>View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <div className="w-px h-5 bg-text-secondary/30 self-center"></div>
          <button className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors">
            <span>Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
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