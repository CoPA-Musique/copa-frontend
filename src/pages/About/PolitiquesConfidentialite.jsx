import React, {useEffect} from "react";

const PolitiquesConfidentialite = () => {
  useEffect(() => {
    document.title = "Politiques de confidentialité - CoPA Musique"
 }, []);

  return (
    <div className="container">
      <h1>Politiques de confidentialité</h1>
    </div>
  );
};

export default PolitiquesConfidentialite;
