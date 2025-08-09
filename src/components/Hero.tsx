import React from "react";
import { ExternalLink } from "lucide-react";
import CircularText from "./visuals/CircularText";
import SplitText from "./visuals/SplitText";
import resumePdf from "../assets/resume.pdf";

interface HeroProps {
  isTech: boolean;
}

const Hero: React.FC<HeroProps> = ({ isTech }) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center">
          <div className="flex-1 text-center lg:text-left">
            <SplitText
              text="Hi there, I'm Justin Mayer"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            {/* <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <>
                Hi, I'm
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Justin Mayer
                </span>
              </>
            </h1> */}

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {isTech
                ? "Experienced Software engineer who loves using technology to solve real-life problems, streamline everyday tasks, and keep learning along the way. I care about building things that make life easier for everyone."
                : "  I believe meaningful work starts with strong values—empathy, curiosity, and integrity. I naturally bring technology into my life and work to improve the way we live, connect, and grow."}
            </p>

            {/* CircularText for mobile only - appears before button */}
            <div className="flex justify-center mb-8 lg:hidden">
              <div className="w-48 h-48 sm:w-64 sm:h-64">
                <CircularText
                  text="LET'S*WORK*TOGETHER!*"
                  onHover="pause"
                  spinDuration={20}
                  // className="custom-class"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors group"
              >
                View Resume
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
          {/* CircularText for large screens - appears on the right */}
          <div className="hidden lg:flex flex-shrink-0 mt-8 lg:mt-0 lg:ml-8 justify-center">
            <div className="w-80 h-80">
              <CircularText
                text="LET'S*WORK*TOGETHER!*"
                onHover="pause"
                spinDuration={20}
                // className="custom-class"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
