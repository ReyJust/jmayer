import React from "react";
import { useState, useEffect } from "react";
import GlareHover from "./visuals/GlareHover";
import {
  Dumbbell,
  Brush,
  Code,
  CakeSlice,
  Mountain,
  Gamepad2,
} from "lucide-react";

interface InterestsProps {
  isTech: boolean;
}

const Interests: React.FC<InterestsProps> = ({ isTech }) => {
  const interests = [
    {
      title: "Fitness",
      icon: <Dumbbell className="w-12 h-12" />,
      description:
        "I enjoy discovering science-based ways to improve my health and staying consistent with my gym routine",
    },
    {
      title: "Baking",
      icon: <CakeSlice className="w-12 h-12" />,
      description:
        "Baking is a disciplined art form that combines creativity with precision. For me, it's relaxing, especially when shared",
    },
    {
      title: "Hiking",
      icon: <Mountain className="w-12 h-12" />,
      description:
        "Exploring nature trails and enjoying the great outdoors on weekends.",
    },
    {
      title: "Gaming",
      icon: <Gamepad2 className="w-12 h-12" />,
      description:
        "Casual gaming and enjoying immersive storytelling experiences.",
    },
    {
      title: "Drawing",
      icon: <Brush className="w-12 h-12" />,
      description: "Occasional abstract sketching as a casual way to unwind",
    },
  ];

  if (isTech) {
    interests.push({
      title: "Coding",
      icon: <Code className="w-12 h-12" />,
      description: "Learning programming concepts and building small projects.",
    });
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            What I enjoy doing in my free time
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div key={index}>
              <GlareHover
                className="bg-white dark:bg-gray-900"
                background="bg-white"
                glareColor="#ffffff"
                width="100%"
                height="100%"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex flex-col items-center  mb-4">
                    <div
                      className={`text-white p-3 rounded-lg w-fit group-hover:scale-110 transition-transform`}
                    >
                      {interest.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {interest.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </GlareHover>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
