import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Experience from './Experience';
import TechStack from './TechStack';
import Projects from './Projects';
import Interests from './Interests'
import Contact from './Contact';

const TechPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero isTech={true} />
      <Experience />
      <TechStack />
      <Projects isTech={true} />
      <Interests isTech={true} />
      <Contact /> 
    </div>
  );
};

export default TechPortfolio;