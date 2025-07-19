import React from "react";
import { Calendar, MapPin, ExternalLink, GraduationCap } from "lucide-react";
import SpotlightCard from "./visuals/SpotlightCard";
import ShinyText from "./visuals/ShinyText";

const Education: React.FC = () => {
  const educations = [
    {
      title: "Bachelor of Computer Science (Hons) (Systems Engineering)",
      university: "Middlesex university of Mauritius",
      link: "https://www.middlesex.mu/",
      location: "Cascavelle, Mauritius",
      period: "2020 - 2023",
      description: "",
      modules: [
        "Information in Organisations (SQL)",
        "Computer Systems Architecture and Operation Systems",
        "Programming for Data Communication and Networks",
        "Science, Technology, Engineering and Mathematics (STEM)",
        "Web Application and Databases",
        "Software Engineering Management and Development (C++)",
        "Project Management and Professional Practice",
        "Advanced Web Development with Big Data",
        "User Experience (UX) Design",
        "Business Intelligence",
        "Undergraduate Individual Project - Speciment counting mobile application for mass rearing insect farms",
      ],
    },
  ];

  return (
    <section className="py-20 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <GraduationCap className="w-16 h-16 text-gray-900 dark:text-white mb-4 m-auto" />
          <ShinyText
            text="Education"
            disabled={false}
            speed={2}
            className="text-4xl font-bold mb-4"
          />

          <p className="text-xl text-gray-600 dark:text-gray-300">
            My educational journey
          </p>
        </div>

        <div className="space-y-12">
          {educations.map((edu, index) => (
            <div key={index} className="relative">
              <SpotlightCard
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                {" "}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.title}
                    </h3>
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>{edu.university}</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Modules
                  </h4>
                  <ul className="space-y-2">
                    {edu.modules.map((module, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
