import React from "react";
import {Link} from "react-router-dom";
import style from "./PostCard.module.css";
import Heading from "../../../atoms/Heading/Heading";
import image from "../../../../assets/img/free-music-vector-icon.jpeg"

const PostCard = (props) => {
    const {title, date, image_src, image_alt, excerpt} = props.data;

    console.log(props.data)

    return (
        <div className={style.PostCard}>
            <Link to="/article">
                <img src={image} alt={image_alt}/>
            </Link>
            <h3>
                <Link to="/article">{title}</Link>
            </h3>
            <p className={style.PostCard__date}>{date}</p>
            <p>{excerpt}</p>
        </div>
    );
};

export default PostCard;
