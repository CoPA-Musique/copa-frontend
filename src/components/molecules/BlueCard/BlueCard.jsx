import React from 'react';
import style from "./BlueCard.module.css";

const BlueCard = ({children}) => {
    return (
        <div className={style.BlueCard}>{children}</div>
    );
}

export default BlueCard;