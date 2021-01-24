import React from "react";
import Heading from "../../atoms/Heading/Heading";
import style from "./ContactInfo.module.css";

const Contact = () => {
  return (
    <div className={style.Contact}>
      <Heading type={2}>Informations de contact : </Heading>
      <ul>
        <li>
          <i className="icofont-long-arrow-right"></i>
          Email :{" "}
          <a
            href="mailto:cm.sherbrooke@gmail.com"
            alt="adresse courrielle de CoPA Musique"
          >
            cm.sherbrooke@gmail.com
          </a>
        </li>
        <li>
          <i className="icofont-long-arrow-right"></i>
          Discord :{" "}
          <a href="https://discord.gg/wM8Nu28 " alt="Salon Discord">
            https://discord.gg/wM8Nu28
          </a>
        </li>
        <li>
          <i className="icofont-long-arrow-right"></i>
          Téléphone : 514-993-2336
        </li>
      </ul>
    </div>
  );
};

export default Contact;
