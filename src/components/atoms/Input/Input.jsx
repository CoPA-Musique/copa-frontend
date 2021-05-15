import React from 'react'
import style from "./Input.module.css";

const Input = ({label, type = "text", name, isRequired = false, isValid = false, inputHandler, value}) => {
  // console.log(name, isValid);
  // console.log(`${style.Input} ${isValid ? style["is-valid"] : ""}`)

    return (
        <div className={`${style.Input} ${isValid ? style["is-valid"] : ""}`}>
            <label htmlFor={name}>{label} : </label>
            <input type={type} id={name} name={name} required={isRequired} value={value}
                   onChange={inputHandler}  />
        </div>
    );
}

export default Input;
