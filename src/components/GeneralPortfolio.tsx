import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Education from "./Education";
import Experience from "./Experience";
// import Projects from "./Projects";
import Interests from "./Interests";
import Contact from "./Contact";
import CTA from "./CTA";
import WebsitePortfolio from "./WebsitePortfolio";
import DotGrid from "./visuals/DotGrid";
import Footer from "./Footer";

const GeneralPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero isTech={false} />
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
      {/* <Projects isTech={false} /> */}
      <WebsitePortfolio />
      <Interests isTech={false} />
      <Contact isTech={false} />
      <CTA />
      <Footer />
    </div>
  );
};

export default GeneralPortfolio;
