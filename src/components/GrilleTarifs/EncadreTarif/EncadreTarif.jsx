import React from "react";
import style from "./EncadreTarif.module.css";
import Button from "../../Button/Button";

const EncadreTarif = ({ title, prix, children }) => {
  return (
    <div className={style.EncadreTarif}>
      <h2>{title}</h2>
      <h3>{prix}</h3>
      <ul>{children}</ul>
      <div className={style.EncadreTarif__btn}>
        <Button btn_text="S'abonner" btn_link="/subscription"></Button>
      </div>
    </div>
  );
};

export default EncadreTarif;
