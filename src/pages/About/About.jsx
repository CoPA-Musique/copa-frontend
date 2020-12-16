import React, {useEffect} from "react";

const About = () => {
  useEffect(() => {
    document.title = "À propos - CoPA Musique"
 }, []);

  return (
    <main>
      <h1>À propos</h1>
    </main>
  );
};

export default About;
