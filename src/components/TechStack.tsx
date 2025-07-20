import React from "react";
import { Code, Database, Cloud, BarChart3, Globe, Server } from "lucide-react";

import Noise from "./visuals/Noise";

const TechStack: React.FC = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
      technologies: ["Vue.js", "Tailwind CSS", "Bootstrap", "OAuth", "JWT"],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "bg-green-500",
      technologies: [
        "Node.js",
        "Typescript",
        "Express.js",
        "BullMQ",
        "FastAPI",
        "PHP",
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      color: "bg-purple-500",
      technologies: ["PostgreSQL", "DynamoDB", "Redis", "AWS S3"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-orange-500",
      technologies: [
        "AWS Lambda",
        "AWS Cognito",
        "Vault",
        "AWS Elastic Beanstalk",
        "Docker",
        "GitHub Actions",
      ],
    },
    {
      title: "Data",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-pink-500",
      technologies: ["Python", "Pandas", "Kedro", "Apache Airflow"],
    },
    {
      title: "Tools",
      icon: <Code className="w-6 h-6" />,
      color: "bg-indigo-500",
      technologies: [
        "Claude code",
        "Git",
        "VS Code",
        "Touch Typing",
        "DBeaver",
        "Vim",
        "Figma",
        "Postman",
        "Slack",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tools and technologies I worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 relative z-10"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`${category.color} text-white p-3 rounded-lg mr-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
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
