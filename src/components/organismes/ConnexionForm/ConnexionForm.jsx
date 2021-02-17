import React, {useState} from 'react';
import style from "./ConnexionForm.module.css";
import Form from "../../atoms/Form/Form";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import BlueCard from "../../molecules/BlueCard/BlueCard";
import isEmail from "validator/es/lib/isEmail";
import isStrongPassword from "validator/es/lib/isStrongPassword";

const ConnexionForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({email: true, password: true});

    const changeEmailHandler = (evt) => {
        setEmail(evt.target.value);
    }

    const changePasswordHandler = (evt) => {
        setPassword(evt.target.value);
    }

    const submitHandler = () => {
        console.log(email, isEmail(email))
        if (isEmail(email)) setError({...error, email: false});
        console.log(error)

        console.log(password, isStrongPassword(password))
        if (isStrongPassword(password)) setError({...error, password: false})
        console.log(error)
    }

    return (
        <section className={style.connexionForm}>
            <BlueCard>
                <Form action="/" method="">
                    <Input label="Adresse email" name="email" inputHandler={changeEmailHandler} value={email} isRequired />
                    <Input label="password" name="password" type="password" inputHandler={changePasswordHandler} value={password} isRequired />
                    <div className={style.submitBtn}><Button btn_text="Se connecter" click={submitHandler}/></div>
                </Form>
            </BlueCard>
        </section>
    );
}

export default ConnexionForm;