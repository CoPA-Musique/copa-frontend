import React from "react";
import PostCard from "../../molecules/Cards/PostCard/PostCard";
import style from "./PostsGrid.module.css";
import img_exemple from "../../../assets/img/free-music-vector-icon.jpeg";
import data from "../../../data/nouvelles.json";
import Pagination from "../../molecules/Pagination/Pagination";

const PostsGrid = () => {
  const dataPosts = Object.values(data);
  
  return (
    <section>
      <div className={style.PostsGrid}>
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
    </section>
  );
};

export default PostsGrid;
