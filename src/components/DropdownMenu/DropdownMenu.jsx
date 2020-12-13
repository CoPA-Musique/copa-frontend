import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ title, children }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  console.log(displayMenu);

  const toggleDropdownMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const menu = displayMenu ? (
    <div>
      <ul className="dropown">{children}</ul>{" "}
    </div>
  ) : null;

  return (
    <>
      <a href="#" onClick={toggleDropdownMenu}>
        {title} <span className="small">&#9660;</span>
      </a>
      {menu}
    </>
  );
};

export default DropdownMenu;
