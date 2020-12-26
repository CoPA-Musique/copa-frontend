import React, { useEffect } from "react";
import EncadreTarif from "../components/GrilleTarifs/EncadreTarif/EncadreTarif";
import GrilleTarifs from "../components/GrilleTarifs/GrilleTarifs";
import TableauComparatifs from "../components/TableauComparatifs/TableauComparatifs";

const Tarifs = () => {
  useEffect(() => {
    document.title = "Tarifs - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>Tarifs</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
        corporis, quo sequi ullam molestiae et, consequatur in voluptas
        reiciendis rerum ratione ipsam cupiditate, earum quis necessitatibus
        facere? Dolore, eveniet dolores.
      </p>
      
      <GrilleTarifs>
        <EncadreTarif title="Membres gratuits" prix="gratuits">
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </EncadreTarif>
        <EncadreTarif title="Membres Pro" prix="10$/mois">
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </EncadreTarif>
      </GrilleTarifs>

      <TableauComparatifs />
    </main>
  );
};

export default Tarifs;
