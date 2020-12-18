import React, {useEffect} from "react";

const Error404 = () => {
  useEffect(() => {
    document.title = "Erreur 404 - CoPA Musique";
  }, []);

  return (
    <main>
      <h1>Erreur 404, page non trouvée.</h1>
    </main>
  );
};

export default Error404;
