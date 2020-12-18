import React, { useEffect } from "react";

const Nouvelles = () => {
  useEffect(() => {
    document.title = "Nouvelles - CoPA Musique";
  }, []);

  return (
    <main>
      <h1>Nouvelles</h1>
    </main>
  );
};

export default Nouvelles;
