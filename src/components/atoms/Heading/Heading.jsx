import React from "react";
import style from "./Heading.module.css";

const Heading = ({ type = 1, children }) => {
  if (type === 1) return <h1 className={style.Heading1}>{children}</h1>;
  if (type === 2) return <h2 className={style.Heading2}>{children}</h2>;
  if (type === 3) return <h3 className={style.Heading3}>{children}</h3>;
  if (type === 4) return <h4 className={style.Heading4}>{children}</h4>;
  if (type === 5) return <h5 className={style.Heading5}>{children}</h5>;
  if (type === 6) return <h6 className={style.Heading6}>{children}</h6>;
  //   return <div></div>;
};

export default Heading;
