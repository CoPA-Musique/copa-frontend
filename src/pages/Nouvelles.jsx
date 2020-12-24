import React, { useEffect } from "react";

const Nouvelles = () => {
  useEffect(() => {
    document.title = "Nouvelles - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>Nouvelles</h1>
    </main>
  );
};

export default Nouvelles;
