import React, { useEffect } from "react";
import Contact from "../components/organismes/ContactInfo/ContactInfo";
import ContactForm from "../components/organismes/ContactForm/ContactForm";
import Heading from "../components/atoms/Heading/Heading";

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
