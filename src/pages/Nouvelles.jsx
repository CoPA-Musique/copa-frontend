import React, { useEffect } from "react";
import Heading from "../components/atoms/Heading/Heading";
import PostsGrid from "../components/organismes/PostsGrid/PostsGrid";

const Nouvelles = () => {
  useEffect(() => {
    document.title = "Nouvelles - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Heading>Nouvelles</Heading>
      <p>Tenez vous informez des dernières nouvelles de CoPA Musique !</p>
      <PostsGrid />
    </main>
  );
};

export default Nouvelles;
