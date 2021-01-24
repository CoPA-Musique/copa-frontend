import React from "react";
import style from "./SideDrawer.module.css";

const SideDrawer = ({ isOpen, close, children }) => {
  let drawerClasses = `${style.SideDrawer}`;

  if (isOpen) {
    drawerClasses += ` ${style.show}`;
  }

  return <div className={drawerClasses} onClick={close}>{children}</div>;
};

export default SideDrawer;
