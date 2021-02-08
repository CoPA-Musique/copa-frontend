import React, {useState} from "react";
import style from "./Header.module.css";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/CoPA-Logo-Rouge.png";
import "../../../assets/icofont/icofont.min.css";
import Nav from "./Nav/Nav";
import HamburgerBtn from "../../atoms/HamburgerBtn/HamburgerBtn";
import SideDrawer from "../../molecules/SideDrawer/SideDrawer";

export default function Header() {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandle = () => {
        setSideDrawerOpen(!sideDrawerOpen);
        console.log(sideDrawerOpen);
    };

    const closeDrawerHandle = () => setSideDrawerOpen(false);

    return (
        <header className={style["main-header"]}>
            <Link to="/">
                <img src={logo} alt="Logo Copa Musique" width={100}/>
            </Link>

            <Nav/>

            <div>
                <HamburgerBtn click={drawerToggleClickHandle}/>
                <div className={style.account}><Link to="/login">Connexion</Link>/<Link to="/register">Inscription</Link></div>
            </div>

            <SideDrawer isOpen={sideDrawerOpen} close={closeDrawerHandle}>
                <Nav sideDrawer/>
            </SideDrawer>
        </header>
    );
}
