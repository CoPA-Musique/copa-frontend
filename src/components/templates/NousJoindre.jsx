import React, { useEffect } from "react";
import Contact from "../organismes/ContactInfo/ContactInfo";
import ContactForm from "../organismes/ContactForm/ContactForm";
import Heading from "../atoms/Heading/Heading";

const NousJoindre = () => {
  useEffect(() => {
    document.title = "Nous joindre - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Heading>Nous Joindre</Heading>
      <Contact />
      <ContactForm />
    </main>
  );
};

export default NousJoindre;
