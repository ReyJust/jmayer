import React, { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";

const WebsitePortfolio: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const websites = [
    {
      title: "Planty",
      year: "2024",
      url: "https://plantymauritius.com/",
      preview: "/jmayer/src/assets/websites/planty.png",
    },
    {
      title: "SixLegs",
      year: "2025",
      url: "https://sixlegs-ltd.com/",
      preview: "/jmayer/src/assets/websites/sixlegs.png",
    },
    {
      title: "Blue Boa Ltd",
      year: "2024",
      url: "https://blue-boa.com/",
      preview: "/jmayer/src/assets/websites/blueboa.png",
    },
    {
      title: "North Coast Designs",
      year: "2025",
      url: "https://sixlegs-ltd.com/",
      preview: "/jmayer/src/assets/websites/sixlegs.png",
    },
    {
      title: "Maison Corson",
      year: "2025",
      url: "https://lamaisoncorson.com/",
      preview: "/jmayer/src/assets/websites/maisoncorson.png",
    },
    {
      title: "Offgrid",
      year: "2025",
      url: "https://offgrid.mu",
      preview: "/jmayer/src/assets/websites/offgrid.png",
    },
    {
      title: "Green Amelys",
      year: "2024",
      url: "https://greenamelys.mu/",
      preview: "/jmayer/src/assets/websites/green-amelys.png",
    },
    {
      title: "Lafi",
      year: "2023",
      url: "https://lafi.mu/",
      preview: "/jmayer/src/assets/websites/lafi.png",
    },
    {
      title: "TechServ Ltd",
      year: "2019",
      url: "https://techserv.mu",
      preview: "/jmayer/src/assets/websites/techserv.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Website Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Websites I made as a web developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => window.open(website.url, '_blank')}
            >
              <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                {imageErrors.has(index) ? (
                  <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    <div className="text-center">
                      <Globe className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">Website Preview</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={website.preview}
                    alt={`${website.title} website preview`}
                    className="w-full h-48 object-cover transition-transform duration-300"
                    onError={() => {
                      setImageErrors(prev => new Set(prev).add(index));
                    }}
                    onLoad={() => console.log(`Image loaded: ${website.title}`)}
                  />
                )}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                  <div
                    className="bg-gray-900 dark:bg-gray-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                    title="Visit Website"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {website.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {website.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePortfolio;
