import React from "react";
import style from "./Copyright.module.css";

const Copyright = () => {
  return (
    <div className={style.copyright}>
      <p>
        &copy;2020 Coop de travail pour les professionnels autonomes de la
        Musique (CoPA Musique). Tout droits réservés.
      </p>
    </div>
  );
};

export default Copyright;
