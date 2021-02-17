import React from 'react';
import style from "./Form.module.css";

const Form = ({method, action, children, onSubmit}) => {
    return (
        <form className={style.Form} onSubmit={onSubmit} method={method} action={action}>
            {children}
        </form>
    );
}

export default Form;