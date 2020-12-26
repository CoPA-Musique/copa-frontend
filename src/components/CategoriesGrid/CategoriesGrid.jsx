import React from "react";
import style from "./CategoriesGrid.module.css";
import musicIllustration from "../../assets/img/free-music-vector-icon.jpeg";
import CategoryCell from "./CategoryCell/CategoryCell";

const CategoriesGrid = () => {
  return (
    <section className={style.CategoriesGrid}>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
      <CategoryCell
        src={musicIllustration}
        alt="illustrations instruments de musiques"
      >
        Catégorie
      </CategoryCell>
    </section>
  );
};

export default CategoriesGrid;
