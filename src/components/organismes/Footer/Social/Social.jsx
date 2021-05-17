import React from "react";
import style from "./Social.module.scss";

const Social = () => {
  return (
    <div className={style.social}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/Collectif-de-Musiciens-de-Sherbrooke-2305831179673505/?modal=admin_todo_tour"
            alt="icone facebook" target="blank"
          >
            <i className="icofont-facebook icofont-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCj2OTZGEK8MCqQy3zdfQlIQ"
            alt="icone youtube" target="blank"
          >
            <i className="icofont-youtube-play icofont-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/copa_musique/"
            alt="icone instagram" target="blank"
          >
            <i className="icofont-instagram icofont-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
