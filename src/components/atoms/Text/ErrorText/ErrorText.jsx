import React from 'react';
import Text from "../Text";
import style from "./ErrorText.module.css";

const ErrorText = ({children}) => {
    return (
        <Text><span className={style.ErrorText}>{children}</span></Text>
    );
}

export default ErrorText;