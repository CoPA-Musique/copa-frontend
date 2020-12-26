import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/img/CoPA-Logo-Rouge.png";

import Copyright from "./Copyright/Copyright";
import { Link } from "react-router-dom";
import Social from "./Social/Social";
import SiteMap from "./SiteMap/SiteMap"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__content}>
        <div className={style.footer__content__logo}>
          <Link to="/">
            <img src={logo} alt="Logo CoPA Musique" width={100} />
          </Link>
        </div>

        <SiteMap />

        <Social />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
