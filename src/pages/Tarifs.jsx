import React, { useEffect } from "react";

const Tarifs = () => {
  useEffect(() => {
    document.title = "Tarifs - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>Tarifs</h1>
    </main>
  );
};

export default Tarifs;
