import React, { useEffect } from "react";

const FaQ = () => {
  useEffect(() => {
    document.title = "Comment ça marche - CoPA Musique";
  }, []);

  return (
    <main>
      <h1>Comment ça marche</h1>
    </main>
  );
};

export default FaQ;
