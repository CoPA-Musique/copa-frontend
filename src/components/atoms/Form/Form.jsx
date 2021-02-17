import React from 'react';
import style from "./Form.module.css";

const Form = ({method, action, children}) => {
    return (
        <form className={style.Form} method={method} action={action}>
            {children}
        </form>
    );
}

export default Form;