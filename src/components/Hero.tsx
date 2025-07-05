import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  isTech: boolean;
}

const Hero: React.FC<HeroProps> = ({ isTech }) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {isTech ? (
              <>
                Building the future with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}clean code
                </span>
              </>
            ) : (
              <>
                Turning ideas into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}digital reality
                </span>
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
            {isTech ? (
              "Full-stack software engineer with a passion for creating scalable, maintainable solutions. I love tackling complex problems and building products that make a difference."
            ) : (
              "I'm a creative problem-solver who enjoys bringing innovative ideas to life through technology. Let's build something amazing together."
            )}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors group">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;