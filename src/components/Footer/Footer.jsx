import React from "react";
import style from "./Footer.module.css"

import Copyright from "./Copyright/Copyright";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h1>Footer</h1>
      <Copyright />
    </footer>
  );
};

export default Footer;
