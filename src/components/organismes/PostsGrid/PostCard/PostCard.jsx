import React from "react";
import { Link } from "react-router-dom";
import style from "./PostCard.module.css";

const PostCard = ({ title, date, image_src, image_alt, children }) => {
  return (
    <div className={style.PostCard}>
      <Link to="/article">
        <img src={image_src} alt={image_alt} />
      </Link>
      <h3>
        <Link to="/article">{title}</Link>
      </h3>
      <p className={style.PostCard__date}>{date}</p>
      <p>{children}</p>
    </div>
  );
};

export default PostCard;
