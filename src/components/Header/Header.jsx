import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../img/CoPA-Logo-Rouge.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo Copa" width={100} />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            {/* <Link to="/about">À propos</Link> */}
            <DropdownMenu title="À propos">
              <Link to="/about">À propos</Link>
              <Link to="/conditions-utilisation">Conditions d'utilisation</Link>
              <Link to="/politiques-confidentialite">Politiques de confidentialité</Link>
            </DropdownMenu>
          </li>

          <li>
            <Link to="/tarifs">Tarifs</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>

      <Link to="/">Connexion</Link>
    </header>
  );
}
