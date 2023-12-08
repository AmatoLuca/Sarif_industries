import React from "react";
import { HeroIntro } from "./heroIntro/HeroIntro";
import "./hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <HeroIntro />
    </div>
  );
};

export default Hero;
