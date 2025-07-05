import React from 'react';
import { Camera, Music, Mountain, BookOpen, Gamepad2, Coffee, Plane, Code } from 'lucide-react';

interface InterestsProps {
  isTech: boolean;
}

const Interests: React.FC<InterestsProps> = ({ isTech }) => {
  const interests = [
    {
      title: "Photography",
      icon: <Camera className="w-6 h-6" />,
      description: isTech 
        ? "Capturing moments through digital imagery, exploring composition and post-processing techniques."
        : "Love capturing beautiful moments and exploring the world through my lens.",
      color: "bg-purple-500"
    },
    {
      title: "Music",
      icon: <Music className="w-6 h-6" />,
      description: isTech
        ? "Audio engineering and music production, experimenting with digital audio workstations."
        : "Playing guitar and discovering new artists across different genres.",
      color: "bg-green-500"
    },
    {
      title: "Hiking",
      icon: <Mountain className="w-6 h-6" />,
      description: isTech
        ? "Outdoor adventures and GPS tracking, combining technology with nature exploration."
        : "Exploring nature trails and enjoying the great outdoors on weekends.",
      color: "bg-blue-500"
    },
    {
      title: "Reading",
      icon: <BookOpen className="w-6 h-6" />,
      description: isTech
        ? "Technical books, programming guides, and staying updated with industry trends."
        : "Fiction, biographies, and personal development books.",
      color: "bg-orange-500"
    },
    {
      title: "Gaming",
      icon: <Gamepad2 className="w-6 h-6" />,
      description: isTech
        ? "Game development and interactive media, exploring game engines and mechanics."
        : "Casual gaming and enjoying immersive storytelling experiences.",
      color: "bg-red-500"
    },
    {
      title: "Coffee",
      icon: <Coffee className="w-6 h-6" />,
      description: isTech
        ? "Precision brewing methods and coffee data analysis for optimal extraction."
        : "Exploring different coffee cultures and brewing techniques.",
      color: "bg-amber-600"
    }
  ];

  if (isTech) {
    interests.push({
      title: "Open Source",
      icon: <Code className="w-6 h-6" />,
      description: "Contributing to open source projects and building developer tools for the community.",
      color: "bg-indigo-500"
    });
  } else {
    interests.push({
      title: "Travel",
      icon: <Plane className="w-6 h-6" />,
      description: "Exploring different cultures and cuisines around the world.",
      color: "bg-teal-500"
    });
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hobbies & Interests</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">What I enjoy doing in my free time</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group">
              <div className={`${interest.color} text-white p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                {interest.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{interest.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;