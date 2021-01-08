import React from "react";
import Button from "../../atoms/Button/Button";
import style from "./Hero.module.css";
import logo_jaune from "../../../assets/img/COPA-logo-jaune.png";

const Hero = ({ title, children, btn_text, btn_link, bgImage }) => {
  // Set the background image
  const HeroEl = document.getElementsByClassName(style.Hero);
  HeroEl[0].style.backgroundImage = `url(${bgImage})`;

  return (
    <section className={style.Hero}>
      <h1>{title}</h1>
      <p>{children}</p>
      <hr />
      <div className={style.Hero__btn}>
        <Button btn_link="/about" btn_text="À propos" />
      </div>
      <div className={style.logo}>
        <img src={logo_jaune} alt="Logo de CoPA Musique" />
      </div>
    </section>
  );
};

export default Hero;
