import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";

const Error404 = () => {
  useEffect(() => {
    document.title = "Erreur 404 - CoPA Musique";
  }, []);

  return (
    <main>
      <Hero title="Erreur 404">Page non trouvée...</Hero>
    </main>
  );
};

export default Error404;