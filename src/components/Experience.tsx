import React from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  BriefcaseBusiness,
} from "lucide-react";
import SpotlightCard from "./visuals/SpotlightCard";
import ShinyText from "./visuals/ShinyText";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Dodobird.ai",
      link: "https://www.linkedin.com/company/dodobird-ai/",
      location: "Mauritius",
      period: "2021 - 2026",
      description:
        "Developed client websites and web applications. Focused on performance optimization and user experience.",
      // technologies: [
      //   "Typescript",
      //   "VueJs",
      //   "Node.js",
      //   "PostgreSQL",
      //   "Airflow",
      //   "Python",
      //   "BullMQ",
      //   "AWS",
      //   "WordPress",
      // ],
      achievements: [
        "Shopify plugin",
        "Nopcommerce plugin",
        "General Data Analytics & Manipulations using Pandas, Jupyter Notebook and Matplotlib",
        "Flexible & source agnostic data ingestion pipeline for CRM with Kedro scheduled with Apache Airflow",
        "Developed a WordPress plugin to display AI recommendations & embed a VueJs chatbot",
        "Comprehensive Full-stack development of a VueJS app with NodeJs back using Express JS, Typescript and PostgreSQL",
        "Queue system for batch emailing with BullMQ including mock development with MailHog",
        "Bulk data import feature with queueing system",
      ],
    },
    {
      title: "Part Time Web Developer",
      company: "BlueBoa Ltd",
      link: "https://www.linkedin.com/company/blue-boa-ei-ltd/",
      location: "Mauritius",
      period: "2023 - 2026",
      description: "",
      // technologies: ["JavaScript", "HTML", "CSS", "WordPress"],
      achievements: [
        "Crafted many website from figma designs using WordPress Theme development, Full Site Block Editor or Elementor builder",
        "Multi-thread python web scraping of a site with more than 10 000 pages",
      ],
    },
  ];

  return (
    <section className="py-20 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <BriefcaseBusiness className="w-16 h-16 text-gray-900 dark:text-white mb-4 m-auto" />
          <ShinyText
            text="Work Experience"
            disabled={false}
            speed={2}
            className="text-4xl font-bold mb-4"
          />

          <p className="text-xl text-gray-600 dark:text-gray-300">
            My professional journey
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <SpotlightCard
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                {" "}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>{exp.company}</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
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
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
