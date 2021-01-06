import React from "react";
import Button from "../../atoms/Button/Button";
import style from "./HowWork.module.css";

const HowWork = () => {
  return (
    <section className={style.HowWork}>
      <h2>Comment ça fonctionne</h2>
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
