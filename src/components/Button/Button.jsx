import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.css";

const Button = ({ btn_link, btn_text }) => {
  return (
    <div className={style.Button}>
      <button>
        <Link to={btn_link}>{btn_text}</Link>
      </button>
    </div>
  );
};

export default Button;
