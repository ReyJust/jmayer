import React from "react";
import Education from "./Education";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Experience from "./Experience";
import TechStack from "./TechStack";
// import Projects from "./Projects";
import Interests from "./Interests";
import Contact from "./Contact";
import CTA from "./CTA";
import WebsitePortfolio from "./WebsitePortfolio";
import DotGrid from "./visuals/DotGrid";
import Footer from "./Footer";

const TechPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero isTech={true} />
      <div className="relative">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <DotGrid
            dotSize={4}
            gap={25}
            baseColor="#1e2939"
            activeColor="#ffffff"
            proximity={100}
            shockRadius={300}
            shockStrength={4}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="relative z-10">
          <Experience />
          <Education />
        </div>
      </div>
      <TechStack />
      {/* <Projects isTech={true} /> */}
      <WebsitePortfolio />
      <Interests isTech={true} />
      <Contact isTech={true} />
      <CTA />
      <Footer />
    </div>
  );
};

export default TechPortfolio;
