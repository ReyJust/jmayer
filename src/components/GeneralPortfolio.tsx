import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Interests from './Interests';

const GeneralPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero isTech={false} />
      <Experience />
      <Projects isTech={false} />
      <Interests isTech={false} />
    </div>
  );
};

export default GeneralPortfolio;