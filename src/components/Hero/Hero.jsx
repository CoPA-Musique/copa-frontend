import React from "react";
import style from "./Hero.module.css";

const Hero = ({ title, children }) => {
  return (
    <div className={style.hero}>
      <h1>{title}</h1>
      <h2>{children}</h2>
    </div>
  );
};

export default Hero;
