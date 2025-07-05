import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, User, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const RouteSelector: React.FC = () => {
  const navigate = useNavigate();

  const handleSelection = (route: string) => {
    navigate(route);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl transition-colors duration-300">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome to My Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-300">Choose the view that best fits your needs</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => handleSelection('/tech')}
            className="w-full p-6 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tech Portfolio</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">For recruiters and technical professionals</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
          
          <button
            onClick={() => handleSelection('/general')}
            className="w-full p-6 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all group text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                  <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">General Portfolio</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">For clients and general audiences</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteSelector;