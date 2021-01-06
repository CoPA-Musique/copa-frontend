import React from "react";
import style from "./Accordeon.module.css";

const Accordeon = ({ children }) => {
  return <div className={style.Accordeon}>{children}</div>;
};

export default Accordeon;
