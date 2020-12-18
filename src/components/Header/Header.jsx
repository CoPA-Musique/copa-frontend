import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/CoPA-Logo-Rouge.png";
import "../../assets/icofont/icofont.min.css";

export default function Header() {
  console.log(style);

  const toggleHamburgerMenu = () => {
    const nav = document.querySelector(`.${style["main-header"]} nav`);

    const responsiveClasse = style.responsive;

    if (!nav.classList.contains(responsiveClasse)) {
      nav.classList.add(responsiveClasse);
    } else {
      nav.classList.remove(responsiveClasse);
    }

    console.log(nav);
  };

  return (
    <header className={style["main-header"]}>
      <Link to="/">
        <img src={logo} alt="Logo Copa" width={100} />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/tarifs">Tarifs</Link>
          </li>
          <li>
            <Link to="/comment-ca-marche">Comment ça marche</Link>
          </li>
          <li>
            <Link to="/nouvelles">Nouvelles</Link>
          </li>
        </ul>
      </nav>

      <div>
        <button className={style.hamburger} onClick={toggleHamburgerMenu}>
          <i className={`icofont-navigation-menu icofont-2x `}></i>
        </button>
      </div>
    </header>
  );
}
