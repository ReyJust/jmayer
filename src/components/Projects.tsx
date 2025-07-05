import React from 'react';
import { Star, GitFork } from 'lucide-react';

interface ProjectsProps {
  isTech: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isTech }) => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: isTech 
        ? "Full-stack e-commerce solution with microservices architecture, featuring real-time inventory management and payment processing."
        : "Modern online shopping platform that helps businesses sell their products with ease and efficiency.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      stats: { stars: 245, forks: 67 }
    },
    {
      title: "Task Management App",
      description: isTech
        ? "Collaborative task management tool with real-time synchronization, built using React and WebSocket technology."
        : "Intuitive app that helps teams organize projects, track progress, and collaborate effectively.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      stats: { stars: 189, forks: 34 }
    },
    {
      title: "Analytics Dashboard",
      description: isTech
        ? "Data visualization dashboard with interactive charts and real-time updates, optimized for high-performance rendering."
        : "Beautiful dashboard that transforms complex data into clear, actionable insights for business decisions.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      stats: { stars: 156, forks: 28 }
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {isTech ? "Some of my recent work and contributions" : "Projects I've brought to life"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {isTech && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.stats.forks}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;