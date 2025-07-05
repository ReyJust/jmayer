import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      achievements: [
        "Reduced API response time by 40%",
        "Led team of 5 engineers",
        "Implemented automated testing suite"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built and maintained web applications from concept to production. Collaborated with designers and product managers.",
      technologies: ["Vue.js", "Python", "Django", "MongoDB"],
      achievements: [
        "Delivered 15+ features on time",
        "Improved user engagement by 60%",
        "Architected scalable backend systems"
      ]
    },
    {
      title: "Software Engineer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Developed client websites and web applications. Focused on performance optimization and user experience.",
      technologies: ["JavaScript", "React", "Node.js", "MySQL"],
      achievements: [
        "Optimized page load times by 50%",
        "Managed 10+ client projects",
        "Implemented responsive designs"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey and key contributions</p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2">
                      <span>{exp.company}</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
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

export default Experience;