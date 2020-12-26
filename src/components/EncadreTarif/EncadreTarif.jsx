import React from "react";
import style from "./EncadreTarif.module.css";
import Button from "../Button/Button";

const EncadreTarif = () => {
  return (
    <div className={style.EncadreTarif}>
      <h2>Membres Pro</h2>
      <h3>10$/mois</h3>
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
      <div className={style.EncadreTarif__btn}>
        <Button btn_text="S'abonner" btn_link="/subscription"></Button>
      </div>
    </div>
  );
};

export default EncadreTarif;
