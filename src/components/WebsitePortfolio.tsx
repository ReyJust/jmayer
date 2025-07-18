import React from "react";
import { Globe } from "lucide-react";

const WebsitePortfolio: React.FC = () => {
  const websites = [
    {
      title: "Blue Boa Ltd",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    // {
    //   title: "Le verger Creole",
    //   icon: <Globe className="w-6 h-6" />,
    //   color: "bg-blue-500",
    // },
    {
      title: "Offgrid",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Green Amelys",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Offgrid",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Lafi",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Planty",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Maison Corson",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "SixLegs",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "North Coast Designs",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-blue-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Websites Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Websites I made as a web developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePortfolio;
