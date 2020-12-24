import React, { useEffect } from "react";
import style from "./Error404.module.css";

const Error404 = () => {
  useEffect(() => {
    document.title = "Erreur 404 - CoPA Musique";
  }, []);

  return (
    <main>
      <div className={style.hero404}>
        <h1>Erreur 404</h1>
        <h2>Page non trouvée</h2>
      </div>
    </main>
  );
};

export default Error404;
