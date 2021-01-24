import React from "react";
import style from "./Text.module.css";

const Text = ({ children }) => {
  return <p className={style.Text}>{children}</p>;
};

export default Text;
