import React, {useEffect} from "react";

const About = () => {
  useEffect(() => {
    document.title = "À propos - CoPA Musique"
 }, []);

  return (
    <div className="container">
      <h1>À propos</h1>
    </div>
  );
};

export default About;
