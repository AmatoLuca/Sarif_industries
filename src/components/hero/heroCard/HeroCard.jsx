import React from "react";
import "./heroCard.scss";

export const HeroCard = ({ children }) => {
  return <div className="hero-card">{children}</div>;
};

export default HeroCard;
