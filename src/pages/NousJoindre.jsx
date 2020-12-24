import React, { useEffect } from "react";
import Contact from "../components/Contact/Contact";
import ContactForm from "../components/ContactForm/ContactForm";

const NousJoindre = () => {
  useEffect(() => {
    document.title = "Nous joindre - CoPA Musique";
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
