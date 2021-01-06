import React from "react";
import style from "./TarifCard.module.css";
import Button from "../../../atoms/Button/Button";

const TarifCard = ({ title, prix, children }) => {
  return (
    <div className={style.TarifCard}>
      <h2>{title}</h2>
      <h3>{prix}</h3>
      <ul>{children}</ul>
      <div className={style.TarifCard__btn}>
        <Button btn_text="S'abonner" btn_link="/subscription"></Button>
      </div>
    </div>
  );
};

export default TarifCard;
