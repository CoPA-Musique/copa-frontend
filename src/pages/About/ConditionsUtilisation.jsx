import React, { useEffect } from "react";

const ConditionsUtilisation = () => {
  useEffect(() => {
    document.title = "Conditions générales d'utilisation - CoPA Musique";
  }, []);

  return (
    <main>
      <h1>Conditions générales d'utilisation</h1>
    </main>
  );
};

export default ConditionsUtilisation;
