import React, { useEffect } from "react";
import CategoriesGrid from "../components/organismes/CategoriesGrid/CategoriesGrid";
import Hero from "../components/organismes/Hero/Hero";
import HowWork from "../components/organismes/HowWork/HowWork";

const Accueil = () => {
  useEffect(() => {
    document.title = "CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero title="CoPA Musique" btn_text="À propos" btn_link="/about">
        Fondé en octobre 2018, la Communauté Musique Estrie (CoME) est un OBNL
        œuvrant dans le domaine musical auprès de la communauté artistique de la
        région de l’Estrie. Guidé par des valeurs d’entraide, de respect,
        d’écoute et de transparence, l’équipe de cette initiative édifie son
        entreprise en regard à des besoins sondés dans cette même communauté. Le
        mandat de CoME est de favoriser l’épanouissement des divers acteurs de
        la scène musicale régionale et encourager leur autonomisation
        professionnelle.
      </Hero>
      <HowWork />
      <CategoriesGrid />
    </main>
  );
};

export default Accueil;
