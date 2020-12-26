import React from "react";
import Button from "../Button/Button";
import style from "./Hero.module.css";

const Hero = ({ title, children, btn_text, btn_link }) => {
  return (
    <section className={style.hero}>
      <h1>{title}</h1>
      <p>{children}</p>
      <hr />
      <div className={style.hero__btn}>
        <Button btn_link="/about" btn_text="À propos" />
      </div>
    </section>
  );
};

export default Hero;
