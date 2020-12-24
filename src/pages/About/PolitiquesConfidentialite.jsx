import React, { useEffect } from "react";

const PolitiquesConfidentialite = () => {
  useEffect(() => {
    document.title = "Politiques de confidentialité - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>Politiques de confidentialité</h1>
    </main>
  );
};

export default PolitiquesConfidentialite;
