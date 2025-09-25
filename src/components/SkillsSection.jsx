import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const skills = [
    { name: "Python", years: "4+", color: "from-yellow-400 to-orange-500" },
    { name: "JavaScript", years: "3+", color: "from-yellow-300 to-yellow-500" },
    { name: "React", years: "3+", color: "from-cyan-400 to-blue-500" },
    { name: "Machine Learning", years: "2+", color: "from-purple-400 to-pink-500" },
    { name: "Node.js", years: "2+", color: "from-green-400 to-green-600" },
    { name: "AWS", years: "1+", color: "from-orange-400 to-orange-600" },
  ];

  const technologies = [
    "Machine Learning", "Natural Language Processing", "Computer Vision", 
    "Web Development", "API Development", "Database Design", "Cloud Computing",
    "Version Control", "Problem Solving", "Algorithm Design", "Data Analysis"
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 border border-accent/10 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-accent/15 -rotate-12"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Creative section header */}
        <div className="relative mb-20">
          <div className="absolute -top-6 -left-6 w-16 h-16 border-l-2 border-t-2 border-accent/30"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-accent/20"></div>
          
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-heading font-light text-accent mb-6 tracking-tight">
              <span className="block">Technical</span>
              <span className="block text-3xl md:text-5xl text-text-secondary ml-8 font-light">
                Skills
              </span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Technologies and tools I work with to build amazing solutions
            </p>
          </div>
        </div>

        {/* Creative skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group relative"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)`
              }}
            >
              {/* Creative background elements */}
              <div className="absolute -inset-2 border border-accent/10 rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              
              <div className="relative bg-background-light/30 border border-accent/20 rounded-lg p-6 hover:border-accent/40 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-accent font-medium text-lg">{skill.name}</span>
                  <span className="text-text-secondary text-sm">{skill.years} years</span>
                </div>
                
                {/* Creative progress bar */}
                <div className="relative">
                  <div className="w-full bg-background rounded-full h-2 overflow-hidden group-hover:bg-background-light transition-colors duration-300">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg`}
                      style={{ 
                        width: visible ? `${Math.min(parseInt(skill.years) * 20, 100)}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    ></div>
                  </div>
                  {/* Floating progress indicator */}
                  <div 
                    className="absolute -top-1 w-4 h-4 bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      left: visible ? `calc(${Math.min(parseInt(skill.years) * 20, 100)}% - 8px)` : '-8px',
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative technologies section */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-accent/30"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 border-r-2 border-b-2 border-accent/20"></div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-accent mb-4">Technologies & Concepts</h3>
            <p className="text-text-secondary">Tools and technologies I work with</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="group relative px-4 py-2 bg-background-light/30 border border-accent/20 text-text-secondary hover:text-accent hover:border-accent transition-all duration-300 cursor-default hover:transform hover:scale-105 hover:-translate-y-1"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: `rotate(${Math.sin(index) * 2}deg)`
                }}
              >
                {tech}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;