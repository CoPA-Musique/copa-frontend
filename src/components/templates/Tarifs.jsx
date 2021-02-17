import React, { useEffect } from "react";
import Heading from "../atoms/Heading/Heading";
import GrilleTarifs from "../organismes/GrilleTarifs/GrilleTarifs";
import TableauComparatif from "../organismes/TableauComparatif/TableauComparatif";

const Tarifs = () => {
  useEffect(() => {
    document.title = "Tarifs - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Heading>Tarifs</Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
        corporis, quo sequi ullam molestiae et, consequatur in voluptas
        reiciendis rerum ratione ipsam cupiditate, earum quis necessitatibus
        facere? Dolore, eveniet dolores.
      </p>

      <GrilleTarifs />

      <TableauComparatif />
    </main>
  );
};

export default Tarifs;
