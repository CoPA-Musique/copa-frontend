import React, { useEffect } from "react";
import Heading from "../../components/atoms/Heading/Heading";
import style from "./Error404.module.css";

const Error404 = () => {
  useEffect(() => {
    document.title = "Erreur 404 - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className={style.hero404}>
        <Heading>Erreur 404</Heading>
        <Heading type={2}>Page non trouvée</Heading>
      </div>
    </main>
  );
};

export default Error404;
