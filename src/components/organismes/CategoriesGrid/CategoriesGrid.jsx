import React from "react";
import style from "./CategoriesGrid.module.css";
import data from "../../../data/Categories.json";
import CategoryCell from "./CategoryCell/CategoryCell";
import musicIllustration from "../../../assets/img/free-music-vector-icon.jpeg";

const CategoriesGrid = () => {
  const categoriesData = Object.values(data);

  return (
    <section className={style.CategoriesGrid}>
      {categoriesData.map((c, i) => (
        <CategoryCell key={i} src={musicIllustration} alt={c.img.alt}>
          {c.nom}
        </CategoryCell>
      ))}
    </section>
  );
};

export default CategoriesGrid;
