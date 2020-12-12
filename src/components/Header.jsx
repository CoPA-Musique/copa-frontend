import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/CoPA-Logo-Rouge.png";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <img src={logo} alt="Logo Copa" width={100} />
      </Link>
      <Nav className="mx-auto">
        <Nav.Link><Link to="/">Accueil</Link></Nav.Link>
        <Nav.Link><Link to="/about">À propos</Link></Nav.Link>
        <Nav.Link><Link to="/tarifs">Tarifs</Link></Nav.Link>
        <Nav.Link><Link to="/faq">FAQ</Link></Nav.Link>
      </Nav>
    </Navbar>
  );
}
