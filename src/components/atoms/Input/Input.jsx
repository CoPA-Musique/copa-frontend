import React from 'react'
import style from "./Input.module.css";

const Input = ({label, type = "text", name, isRequired = false, inputHandler, value}) => {
    return (
        <div className={style.Input}>
            <label htmlFor={name}>{label} : </label>
            <input type={type} id={name} name={name} required={isRequired} value={value}
                   onChange={inputHandler}  />
        </div>
    );
}

export default Input;