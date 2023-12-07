import React from "react";
import { HeroCard } from "./heroCard/HeroCard";
import "./hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <HeroCard />
      <HeroCard />
    </div>
  );
};

export default Hero;
