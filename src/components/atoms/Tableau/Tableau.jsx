import React from "react";
import style from "./Tableau.module.css";

const Tableau = ({ children, center = false }) => {
  return <table className={style.Tableau}>{children}</table>;
};

export default Tableau;
