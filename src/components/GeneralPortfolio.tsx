import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Interests from "./Interests";
import Contact from "./Contact";
// import SplashCursor from "./SplashCursor";

const GeneralPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* <SplashCursor /> */}
      <Navigation />
      <Hero isTech={false} />
      <Experience />
      <Projects isTech={false} />
      <Interests isTech={false} />
      <Contact />
    </div>
  );
};

export default GeneralPortfolio;
