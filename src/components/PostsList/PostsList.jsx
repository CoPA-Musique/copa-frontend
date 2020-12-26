import React from "react";
import PostCard from "./PostCard/PostCard";
import style from "./PostsList.module.css";
import img_exemple from "../../assets/img/free-music-vector-icon.jpeg";
import data from "../../data/nouvelles.json";
import Pagination from "../Pagination/Pagination";

const PostsList = () => {
  const dataPosts = Object.values(data);
  
  return (
    <>
      <div className={style.PostsList}>
        {dataPosts.map((p, i) => (
          <PostCard
            title={p.title}
            date={p.date}
            image_src={img_exemple}
            image_alt={p.image_alt}
          >
            {p.excerpt}
          </PostCard>
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default PostsList;
