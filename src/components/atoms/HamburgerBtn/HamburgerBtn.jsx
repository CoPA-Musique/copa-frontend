import React from "react";
import style from "./HamburgerBtn.module.css";

const HamburgerBtn = ({ click }) => {
  return (
    <div>
      <button className={style.hamburger} onClick={click}>
        <i className={`icofont-navigation-menu icofont-2x `}></i>
      </button>
    </div>
  );
};

export default HamburgerBtn;
