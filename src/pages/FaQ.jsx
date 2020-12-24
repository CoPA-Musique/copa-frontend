import React, { useEffect } from "react";
import Accordeon from "../components/Accordeon/Accordeon";

const FaQ = () => {
  useEffect(() => {
    document.title = "Comment ça marche - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>Comment ça marche</h1>
      <Accordeon title="Question 1">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti vero
          eos eius, repellendus aut eveniet dolore expedita ut numquam omnis quo
          placeat, alias, quibusdam nihil rerum incidunt dolor! Incidunt,
          adipisci!
        </span>
      </Accordeon>
    </main>
  );
};

export default FaQ;
