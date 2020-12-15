import React, {useEffect} from "react";

const Accueil = () => {
  useEffect(() => {
    document.title = "CoPA Musique"
 }, []);
  return (
    <div className="container">
      <h1>Accueil</h1>
    </div>
  );
};

export default Accueil;
