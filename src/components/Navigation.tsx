import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Code,
  User,
  Github,
  Linkedin,
  Mail,
  Notebook,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import resumePdf from "../assets/resume.pdf";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentView = location.pathname === "/tech" ? "tech" : "general";

  const handleViewChange = (view: "tech" | "general") => {
    navigate(`/${view}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Justin Mayer
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => handleViewChange("tech")}
                className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  currentView === "tech"
                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Code className="w-4 h-4 inline sm:mr-2" />
                <span className="hidden sm:inline">Tech</span>
              </button>
              <button
                onClick={() => handleViewChange("general")}
                className={`px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  currentView === "general"
                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <User className="w-4 h-4 inline sm:mr-2" />
                <span className="hidden sm:inline">General</span>
              </button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <ThemeToggle />
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="View Resume"
              >
                <Notebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              {currentView === "tech" && (
                <a
                  href="https://github.com/ReyJust"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="GitHub @ReyJust"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
              <a
                href="https://www.linkedin.com/in/jpjmayer/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:jusmayer@outlook.com"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
