import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/CoPA-Logo-Rouge.png";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <img src={logo} alt="Logo Copa" width={100} />
      </Link>

      <Nav className="mx-auto">
        <Nav.Link>
          <Link to="/">Accueil</Link>
        </Nav.Link>

        <NavDropdown title="À propos" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/about">À propos</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/conditions-utilisation">
              Conditions générales d'utilisation
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/politiques-confidentialité">
              Politiques de confidentialité
            </Link>
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link>
          <Link to="/tarifs">Tarifs</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/blog">Blog</Link>
        </Nav.Link>

        <Nav.Link>
          <Link to="/faq">FAQ</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
