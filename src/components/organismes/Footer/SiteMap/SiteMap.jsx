import React from "react";
import { Link } from "react-router-dom";
import style from "./SiteMap.module.scss";

const SiteMap = () => {
  return (
    <div className={style.siteMap}>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about"> À propos</Link>
          <ul>
            <li>
              <Link to="/conditions-utilisation">Condition d'utilisation</Link>
            </li>
            <li>
              <Link to="/politiques-confidentialite">
                Politiques de confidentialité
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/tarifs">Tarifs</Link>{" "}
        </li>
      </ul>
      
      <ul className={style["siteMap__liste2"]}>
        <li>
          <Link to="/comment-ca-marche">Comment ça marche</Link>
        </li>
        <li>
          <Link to="/nouvelles">Nouvelles</Link>
        </li>
        <li>
          <Link to="/contact">Nous joindre</Link>
        </li>
      </ul>
    </div>
  );
};

export default SiteMap;
