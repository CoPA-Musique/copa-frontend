import React from "react";
import { Link } from "react-router-dom";
import style from "./Hero.module.css";

const Hero = ({ title, children, background }) => {
  return (
    <section className={style.hero}>
      <h1>{title}</h1>
      <p>{children}</p>
      {/* <div className="divider"></div> */}
      <hr />
      <div className={style.["hero__btn"]}>
        <button>
          <Link>À propos</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
