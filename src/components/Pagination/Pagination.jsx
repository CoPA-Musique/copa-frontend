import React from "react";
import { Link } from "react-router-dom";
import style from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={style.Pagination}>
      <ul>
        <li className={style["Arrow--left"]}>
          <Link to="/nouvelles">⇦</Link>
        </li>
        <li>
          <Link to="/nouvelles">1</Link>
        </li>
        <li>
          <Link to="/nouvelles">2</Link>
        </li>
        <li>
          <Link to="/nouvelles">3</Link>
        </li>
        <li className={style["Arrow--right"]}>
          <Link to="/nouvelles">⇨</Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
