import React from "react";
import Hero from "./hero";
import TechStack from "./TechStack";
import Quote from "./Quote";
import Project from "./Project";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <div class="absolute top-0 z-[-2] h-auto w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto px-8 mb-5 pt-28 pb-7 lg:pt-36 xl:pt-60">
        <Hero />
      </div>
      <div className="container pt-10 mb-32">
        <Quote />
      </div>
      <div className="container mx-auto px-8 py-5 mb-5">
        <TechStack />
      </div>
      <div className="container mx-auto px-8 py-5 mb-5">
        <Project />
      </div>
      <div className="container mx-auto px-8 py-5 mb-5">
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
