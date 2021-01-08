import React, { useEffect } from "react";
import Contact from "../components/organismes/ContactInfo/ContactInfo";
import ContactForm from "../components/organismes/ContactForm/ContactForm";

const NousJoindre = () => {
  useEffect(() => {
    document.title = "Nous joindre - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>Nous Joindre</h1>
      <Contact />
      <ContactForm />
    </main>
  );
};

export default NousJoindre;
