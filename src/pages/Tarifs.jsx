import React, {useEffect} from "react";

const Tarifs = () => {
  useEffect(() => {
    document.title = "Tarifs - CoPA Musique"
 }, []);

  return (
    <div className="container">
      <h1>Tarifs</h1>
    </div>
  );
};

export default Tarifs;
