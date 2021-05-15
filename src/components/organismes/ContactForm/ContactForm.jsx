import React from "react";
import Heading from "../../atoms/Heading/Heading";
import style from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <section className={style.ContactForm}>
      <Heading type={2}>Nous laisser un message : </Heading>
      <form id="contactForm" method="post">
        <div>
          <label htmlFor="name">Nom et prénom : </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Adresse courriel : </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="subject">Sujet : </label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div>
          <label htmlFor="message">Message : </label>
          <textarea name="message" id="message"/>
        </div>
      </form>
      <button type="submit" form="contactForm">
        Envoyer !
      </button>
    </section>
  );
};

export default ContactForm;
