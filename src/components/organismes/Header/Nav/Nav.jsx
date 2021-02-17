import React from "react";
import {Link} from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({sideDrawer}) => {
    let navClasses = style.Nav;

    if (sideDrawer) {
        navClasses += ` ${style.sideDrawer}`;
    }

    return (
        <nav className={navClasses}>
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
                <li className={style.account}><Link to="/login">Connexion</Link></li>
                <li className={style.account}><Link to="/register">Inscription</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
