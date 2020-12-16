import React from "react";
import style from "./DropdownMenu.module.css";

const DropdownMenu = ({ title, children }) => {
  return (
    <li className={style.dropdown}>
      <button>
        {title} <span className={style.small}>&#9660;</span>
      </button>
      <ul className={style["dropdown-content"]}>{children}</ul>
    </li>
  );
};

export default DropdownMenu;
