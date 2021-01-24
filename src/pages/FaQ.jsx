import React, { useEffect } from "react";
import Heading from "../components/atoms/Heading/Heading";
import Accordeon from "../components/molecules/Accordeon/Accordeon";
import Panel from "../components/molecules/Accordeon/Panel/Panel";
import data from "../data/FaQ.json";

const FaQ = () => {
  useEffect(() => {
    document.title = "Comment ça marche - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  const dataFaQ = Object.values(data);

  return (
    <main>
      <Heading>Comment ça marche</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        nihil nostrum ipsa fugit iste aut labore quae minus reiciendis. Sequi
        reprehenderit veritatis enim pariatur iste expedita distinctio
        necessitatibus ex praesentium!
      </p>
      <br />
      <Accordeon>
        {dataFaQ.map((d, i) => (
          <Panel key={i} title={d.title}>
            {d.content}
          </Panel>
        ))}
      </Accordeon>
    </main>
  );
};

export default FaQ;
