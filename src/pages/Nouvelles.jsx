import React, { useEffect } from "react";
import PostsList from "../components/organismes/PostsGrid/PostsGrid";

const Nouvelles = () => {
  useEffect(() => {
    document.title = "Nouvelles - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>Nouvelles</h1>
      <p>Tenez vous informez des dernières nouvelles de CoPA Musique !</p>
      <PostsList />
    </main>
  );
};

export default Nouvelles;
