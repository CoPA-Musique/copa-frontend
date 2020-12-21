import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./HowWork.module.css";

const HowWork = () => {
  const [section, setSection] = useState({
    "sous-titre": "Visiter",
    prix: "gratuit",
    text:
      "Accès au répertoire d’abonnés et à leur page de présentation personnelle agissant comme véritable point de rencontre entre les professionnels de la scène artistique régionale, CoPA Musique permet à tous d’accéder à notre liste d’abonnés. Grâce à notre outil de recherche efficace et intuitif, il sera facile de trouver un professionnel ou encore, un groupe de musique correspondant à vos besoins.",
  });

  return (
    <div className={style.HowWork}>
      <h2>Comment ça fonctionne</h2>
      <p>
        En devenant visiteur, utilisateur ou abonné, vous pourrez bénéficier de
        différentes fonctionnalités et trouverez plusieurs avantages sur la
        plateforme web de CoPA Musique.{" "}
      </p>
      <div className={style.HowWork__btn}>
        <button>
          <Link to="/comment-ca-marche">En apprendre plus</Link>
        </button>
      </div>
    </div>
  );
};

export default HowWork;
