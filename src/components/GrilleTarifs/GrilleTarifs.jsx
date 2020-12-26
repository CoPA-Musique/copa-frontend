import React from "react";
import style from "./GrilleTarifs.module.css";

const GrilleTarifs = ({ children }) => {
  return <div className={style.GrilleTarifs}>
      {children}
  </div>;
};

export default GrilleTarifs;
