import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";

const Button = ({ btn_link = "#", btn_text, click }) => {
  return (
    <div className={style.Button}>
      <button onClick={click}>
        <Link to={btn_link}>{btn_text}</Link>
      </button>
    </div>
  );
};

export default Button;
