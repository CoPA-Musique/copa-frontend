import React from "react";
import style from "./GrilleTarifs.module.css";
import data from "../../../data/Tarifs.json";
import TarifCard from "../../molecules/Cards/TarifCard/TarifCard";

const GrilleTarifs = ({ children }) => {
  const dataTarifs = Object.values(data);

  return (
    <section className={style.GrilleTarifs}>
      {dataTarifs.map((t, i) => (
        <TarifCard title={t.titre} prix={t.tarif} key={i}>
          {t.arguments.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </TarifCard>
      ))}
    </section>
  );
};

export default GrilleTarifs;
