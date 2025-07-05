import React from 'react';
import { Code, Database, Cloud, Smartphone, Globe, Server } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
      technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Webpack"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "bg-green-500",
      technologies: ["Node.js", "Python", "Django", "Express.js", "FastAPI", "GraphQL"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "bg-purple-500",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-orange-500",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "bg-pink-500",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "Tools",
      icon: <Code className="w-6 h-6" />,
      color: "bg-indigo-500",
      technologies: ["Git", "VS Code", "Figma", "Postman", "Jira", "Slack"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Tools and technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`${category.color} text-white p-3 rounded-lg mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;