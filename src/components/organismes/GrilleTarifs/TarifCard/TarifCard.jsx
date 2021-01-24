import React from "react";
import style from "./TarifCard.module.css";
import Button from "../../../atoms/Button/Button";
import Heading from "../../../atoms/Heading/Heading";

const TarifCard = ({ title, prix, children }) => {
  return (
    <div className={style.TarifCard}>
      <Heading type={2}>{title}</Heading>
      <Heading type={3}>{prix}</Heading>
      <ul>{children}</ul>
      <div className={style.TarifCard__btn}>
        <Button btn_text="S'abonner" btn_link="/subscription"></Button>
      </div>
    </div>
  );
};

export default TarifCard;
