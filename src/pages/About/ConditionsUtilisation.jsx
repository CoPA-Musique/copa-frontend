import React, {useEffect} from "react";

const ConditionsUtilisation = () => {
  useEffect(() => {
    document.title = "Conditions générales d'utilisation - CoPA Musique"
 }, []);

  return (
    <div className="container">
      <h1>Conditions générales d'utilisation</h1>
    </div>
  );
};

export default ConditionsUtilisation;
