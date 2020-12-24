import React from "react";
import { Link } from "react-router-dom";
import style from "./Hero.module.css";

const Hero = ({ title, children, btn_text, btn_link }) => {
  return (
    <section className={style.hero}>
      <h1>{title}</h1>
      <p>{children}</p>
      <hr />
      <div className={style["hero__btn"]}>
        <button>
          <Link to={btn_link}>{btn_text}</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
