import React from "react";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import style from "./HowWork.module.css";

const HowWork = () => {
  return (
    <section className={style.HowWork}>
      <Heading type={2}>Comment ça fonctionne</Heading>
      <p>
        En devenant visiteur, utilisateur ou abonné, vous pourrez bénéficier de
        différentes fonctionnalités et trouverez plusieurs avantages sur la
        plateforme web de CoPA Musique.{" "}
      </p>
      <div className={style.HowWork__btn}>
        <Button btn_link="/comment-ca-marche" btn_text="En apprendre plus" />
      </div>
    </section>
  );
};

export default HowWork;
