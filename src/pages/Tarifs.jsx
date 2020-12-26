import React, { useEffect } from "react";
import EncadreTarif from "../components/EncadreTarif/EncadreTarif";

const Tarifs = () => {
  useEffect(() => {
    document.title = "Tarifs - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>Tarifs</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis, quo sequi ullam molestiae et, consequatur in voluptas reiciendis rerum ratione ipsam cupiditate, earum quis necessitatibus facere? Dolore, eveniet dolores.</p>
      <EncadreTarif />
    </main>
  );
};

export default Tarifs;
