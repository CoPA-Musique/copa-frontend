import React from "react";
import { Link } from "react-router-dom";
import style from "./CategoryCell.module.css";

const CategoryCell = ({ src, alt, children }) => {
  return (
    <div className={style.CategoryCell}>
      <Link to="#">
        <img src={src} alt={alt} />
      </Link>
      <h3>
        <Link to="#">{children}</Link>
      </h3>
    </div>
  );
};

export default CategoryCell;
