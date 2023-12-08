import React from "react";
import gifIntro from "./images/NewProjectxxx.gif";
import "./heroIntro.scss";

export const HeroIntro = () => {
  return (
    <div className="hero-intro-container">
      <img src={gifIntro} alt="intro" />
      <div className="hero-intro-overlay"></div>
    </div>
  );
};

export default HeroIntro;
