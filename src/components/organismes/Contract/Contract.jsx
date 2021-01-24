import React from "react";
import style from "./Contract.module.css";

const Contract = ({ children }) => {
  return <div className={style.Contract}>{children}</div>;
};

export default Contract;
