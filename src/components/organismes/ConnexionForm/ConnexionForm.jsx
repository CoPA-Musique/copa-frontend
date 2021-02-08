import React from 'react';
import style from "./ConnexionForm.module.css";
import Button from "../../atoms/Button/Button";

const ConnexionForm = (props) => {
    return (
        <section className={style.connexionForm}>
            <form>
                <div>
                    <label htmlFor="email">Adresse email : </label><input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe : </label><input type="password"/>
                </div>
                <div className={style.submitBtn}><Button btn_text="Se connecter" /></div>
            </form>
        </section>
    );
}

export default ConnexionForm;