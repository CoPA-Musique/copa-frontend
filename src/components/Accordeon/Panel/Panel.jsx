import React, { useState } from "react";
import style from "./Panel.module.css";
import { ReactComponent as Arrow } from "./arrow-row-expand-down-ico-white.svg";

const Panel = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const togglePanel = (evt) => {
    setExpanded(!expanded);

    if (expanded && evt.target.children.length !== 0) {
      evt.target.classList.remove(`${style.active}`);
    } else {
      evt.target.classList.add(`${style.active}`);
    }

    if (expanded && evt.target.children.length === 0) {
      evt.target.parentNode.classList.remove(`${style.active}`);
    } else {
      evt.target.parentNode.classList.add(`${style.active}`);
    }
  };

  let panelContent = "";
  if (expanded) {
    panelContent = <p className={style.Panel__content}>{children}</p>;
  }

  return (
    <div className={style.Panel}>
      <div className={style.Panel__header} onClick={togglePanel}>
        <h3>{title}</h3>
        <Arrow className={style.Arrow} />
      </div>
      {panelContent}
    </div>
  );
};

export default Panel;
