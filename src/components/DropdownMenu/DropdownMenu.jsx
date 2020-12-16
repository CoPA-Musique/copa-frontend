import React from "react";
import style from "./DropdownMenu.module.css";

const DropdownMenu = ({ title, children }) => {
  const toggleDropdown = () => {
    const dropdownContent = document.querySelector(
      `.${style["dropdown-content"]}`
    );

    if (!dropdownContent.classList.contains(style.responsive)) {
      dropdownContent.classList.add(style.responsive);
    } else {
      dropdownContent.classList.remove(style.responsive);
    }
  };

  return (
    <li className={style.dropdown}>
      <button onClick={toggleDropdown}>
        {title} <span className={style.small}>&#9660;</span>
      </button>
      <ul className={style["dropdown-content"]}>{children}</ul>
    </li>
  );
};

export default DropdownMenu;
