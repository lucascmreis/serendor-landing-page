import React from "react";
import "./Hero.css";
import logoImg from "../assets/hero-serendor-logo.png"

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <img src={logoImg} alt="Logo" className="hero_logo"/>
      <a className="hero_button" href="/" > 
        Saiba mais 
      </a>

    </div>
  );
};

export default Hero;
