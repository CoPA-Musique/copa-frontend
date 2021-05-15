import React, {useState} from 'react';
import style from "./ConnexionForm.module.css";
import Form from "../../atoms/Form/Form";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import BlueCard from "../../molecules/BlueCard/BlueCard";
import isEmail from "validator/es/lib/isEmail";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import ErrorText from "../../atoms/Text/ErrorText/ErrorText";

// TODO : corriger bug de comportement
const ConnexionForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({email: "", password: ""});
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // console.log("ConnexionForm rendered")

  const changeEmailHandler = (evt) => {
    setEmail(evt.target.value);

    if (isEmail(email)) {
      setEmailValid(true);
      setError({...error, email: ""});
    } else {
      setEmailValid(false);
      // setError({...error, email: "Adresse email invalide"});
    }
  }

  const changePasswordHandler = (evt) => {
    setPassword(evt.target.value);

    if (isStrongPassword(password, {minLength: 8})) {
      setPasswordValid(true);
      setError({...error, password: ""});
    } else {
      setPasswordValid(false);
      // setError({...error, password: "Mot de passe pas assez fort"});
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isEmail(email)) {
      setError({...error, email: "Adresse email invalide"});
    } else {
      setError({...error, email: ""});
    }

    if (!isStrongPassword(password)) {
      setError({...error, password: "Mot de passe pas assez fort"});
    } else {
      setError({...error, password: ""});
    }

    console.log("Form submitted")
  }

  console.log(error)

  return (
    <section className={style.connexionForm}>
      <BlueCard>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Input label="Adresse email" name="email" inputHandler={(e) => changeEmailHandler(e)} value={email}
                 isValid={emailValid}
                 isRequired/>
          {error && <ErrorText>{error.email}</ErrorText>}
          <Input label="password" name="password" type="password"
                 inputHandler={(e) => changePasswordHandler(e)} value={password} isValid={passwordValid}
                 isRequired/>
          {error && <ErrorText>{error.password}</ErrorText>}
          <div className={style.submitBtn}><Button btn_text="Se connecter" click={(e) => submitHandler(e)}/>
          </div>
        </Form>
      </BlueCard>
    </section>
  );
}

export default ConnexionForm;
